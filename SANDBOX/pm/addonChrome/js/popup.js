$(document).ready(function () {





    localStorage.setItem('tab', 'like');



    $('li').click(function () {
        var tabName = $(this).text();
        localStorage.setItem('tab', tabName);
    });


    $('#textContainer').toggle();

    var userSearchInputValue = null;


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

        userOperation('userSearch', userSearchInputValue);
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
        clearInterval(x);
        userOperation('stopFollow');
        $("#loadingFollow").removeClass('loading');
    })

    $("#allUserLikeStopBtn").click(function () {
        userOperation('stopLike');
        $("#loadingLike").removeClass('loading');
    })


    $("#userFollowInput").on('input',
        function () {
            if ($(this).val() === '') {
                $('#singleFollowBtn').attr('disabled', true);
            }

            //userFollowInputValue = $(this).val();
            //  console.log(userFollowInputValue);
        }
    );


    $("#userFollowBtn").click(function () {


        userOperation('userFollow');
        $('#userFollowInput').val('');
        $("#loadingFollow").addClass('loading');
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

    userOperation('singleFollow', id, '');
});


$("#allUserLikeBtn").click(function () {
    userLike();
});

function userOperation(message, inputEntry, bool) {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {message: message, userName: inputEntry, userFollowSingleBool: bool});

    });
}


function userLike() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {message: "userLike"});

    });
}


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.messageType === 'check') {
            $('#lastFollowNameOutput').text(request.textArea);

        }

        if (request.captcha === 'nomorerecrds') {

            var myAudio = new Audio(chrome.runtime.getURL("/mp3/note.mp3"));
            myAudio.play();

        }

        if (request.captcha === 'captcha') {

            var myAudio = new Audio(chrome.runtime.getURL("/mp3/note.mp3"));
                myAudio.play();

        }


        $("#div3").append('<p>' + request.textArea + '</p>');
        scrollToBottom();

    });

function timer() {

    var p = JSON.parse(window.countData);

    var timeLeft = (((parseInt(p['TOTAL_COUNTS'])) - parseInt(p['FOLLOWED_COUNTS'])) * 0.4 ) ;

    var d = new Date(2019,0,0,0,0,0,0);

    var minutes = timeLeft / 60;

    d.setMinutes(minutes);

    document.getElementById("timer").innerHTML =  d.getHours() + ' '+ d.getMinutes() + ' ' + d.getSeconds();
}


function getCount(message, lastadded ,username) {
    $.post('http://localhost/addonChrome/php/userCount.php', {message1: message, message2:lastadded,  username: username}, function (data) {


        window.countData = data;


        var parsed = JSON.parse(data);


        $(".userCount").text(parsed['TOTAL_COUNTS']);
        $("#followingUserCount").text(parsed['FOLLOWED_COUNTS']);
        $("#userShare").text(parsed['LIKED_COUNTS']);
        $("#userLikeCount").text(parsed['SHARED_COUNTS']);
        $(".nolisting").text(parsed['NOLISTING_COUNTS']);


        $("#lastUser").text(parsed['LAST_ADDED_USERID']);
        $("#lastFollowUser").text(parsed['LAST_FOLLOW_USERID']);
        $("#sharedUser").text(parsed['LAST_SHARE_USER']);
        $("#likedUser").text(parsed['LAST_LIKE_USERID']);
        $(".lastItem").text(parsed['LAST_LIKE_ITEM']);
        $("#lastSearch").text(parsed['LAST_SEARCH_USERNAME']);

       timer();

    });
}

let userCountInterva = setInterval(function () {
/*

    getCount('lastSearch', '#lastSearch');

    getCount('userName', '#lastFollowNameOutput', $('#lastFollowUser').text());
   */
    getCount('allCount','');




}, 500);

function scrollToBottom(element) {
    $('#div2').scrollTop($('#div2')[0].scrollHeight);
}

$("#slideBtn").click(function () {


    $('#textContainer').slideToggle(2, function (status) {

    });
});




});