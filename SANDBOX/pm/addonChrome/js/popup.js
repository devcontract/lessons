$(document).ready(function () {
    var userSearchInputValue = null;
    var userFollowInputValue = null;

    $("#userSearchInput").on('change',
        function () {
            userSearchInputValue = $(this).val();
           // console.log(userSearchInputValue);
        }
    );

    $("#usersSearchBtn").click(function () {
        userSearch(userSearchInputValue);
        $("#loading").addClass('loading');

    });

    $("#usersSearchStopBtn").click(function () {
        stop('stopSearch');
        $("#loading").removeClass('loading');
    });

    $("#allUserFollowStopBtn").click(function () {
        stop('stopFollow');
    });

    $("#userShareBtn").click(function () {
       shareItems();
    });


    $("#userFollowInput").on('change',
        function () {
            userFollowInputValue = $(this).val();
          //  console.log(userFollowInputValue);
        }
    );

    $("#singleFollowBtn").on('click',
        function () {
            userFollow('single');
        }
    );


    $("#userFollowBtn").click(function () {
        userFollow(userFollowInputValue);
    });

});


function userSearch(InputValue) {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {message: "userSearch", userName: InputValue});

    });
}

function userFollow(InputValue) {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {message: "userFollow", userNameFollow: InputValue});

    });
}

function stop(stopType) {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {message: "stop", stop: stopType});

    });
}

function shareItems() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {message: "shareItem"});

    });
}