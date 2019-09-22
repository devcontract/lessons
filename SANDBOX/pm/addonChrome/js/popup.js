$(document).ready(function () {

    $('#textContainer').toggle();

    var userSearchInputValue = null;
    var userFollowInputValue = null;

    $("#userSearchInput").on('change',
        function () {
            userSearchInputValue = $(this).val();
           // console.log(userSearchInputValue);
        }
    );

    $("#usersSearchContinueBtn").click(function () {
        userOperation('continueUserSearch');
    });


    $("#usersSearchBtn").click(function () {

        userOperation('userSearch',userSearchInputValue);
        $("#loading").addClass('loading');

    });


    $("#usersSearchStopBtn").click(function () {
        userOperation('stopSearch');
        $("#loading").removeClass('loading');
    });


    $("#userShareBtn").click(function () {
        userOperation('shareItem');
        $("#loadingShare").addClass('loading');
    });

    $("#allUserShareStopBtn").click(function () {
        userOperation('stopShare');
        $("#loadingShare").removeClass('loading');
    });

    $("#allUserFollowStopBtn").click(function () {
        userOperation('stopFollow');
        $("#loadingFollow").removeClass('loading');
    })

    $("#allUserLikeStopBtn").click(function () {
        userOperation('stopLike');
        $("#loadingLike").removeClass('loading');
    })


    $("#userFollowInput").on('input',
        function () {
        if($(this).val()===''){
            $('#singleFollowBtn').attr('disabled',true);
        }
        
            //userFollowInputValue = $(this).val();
            //  console.log(userFollowInputValue);
        }
    );


    $("#userFollowBtn").click(function () {

        userOperation('userFollow');
        $("#loadingFollow").addClass('loading');
    });
    });


   $("#userFollowInput").on('click',
        function () {

            $.post('http://localhost/addonChrome/php/getToShare.php', {shared: 'share'}, function (userId) {
                $("#userFollowInput").val(userId);

                $('#singleFollowBtn').attr('disabled', false);
            });
        }
    );

 $('#singleFollowBtn').click(function () {
     var id = $("#userFollowInput").val();
    userOperation('singleFollow',id);
});


$("#allUserLikeBtn").click(function () {
    userLike();
});

function userOperation(message,inputEntry,bool){
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {message: message, userName:inputEntry,userFollowSingleBool:bool});

    });
}


function userLike() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {message: "userLike"});

    });
}

function getCount(message,outputElement,) {
    $.post('http://localhost/addonChrome/php/userCount.php',{message:message},function (data) {
        $("#"+ outputElement +"").text(data);
    });
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        $("#div3").append('<p>'+request.textArea+'</p>');
        scrollToBottom();

    });

let userCountInterva = setInterval(function () {

    getCount('userCount','userCount');
    getCount('followCount','followingUserCount');
    getCount('sharingCount','userShare');
    getCount('likeCount','userLikeCount');
    getCount('lastuser','lastUser');
    getCount('lastSearch','lastSearch');
    getCount('lastFollow','lastFollowUser');
    getCount('lastShare','shareduser');
    getCount('lastLike','likedUser');

},1000);

function scrollToBottom(element) {
    $('#div2').scrollTop($('#div2')[0].scrollHeight);
}

$("#slideBtn").click(function () {

    $('#textContainer').slideToggle(2,function (status) {

    });
});

