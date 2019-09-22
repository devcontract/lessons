var userSearchInterval = null;
var followInterval = null;
var get_data = null;


var internalTimerShare = null;
var interTshare = null;
var likeInternalInterval = false;
var max_idIn = null;
var max_id_Like = null;
var mainShareInterval = null;
var mainLikeInterval = null;
var internalTimerLike = null;
var continue_search_interval = null;


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

        if (request.message === 'stopShare') {
            clearInterval(mainShareInterval);
            clearInterval(internalTimerShare);
            clearInterval(interTshare);
            clearInterval(max_idIn);
        }

        if (request.message === 'stopSearch') {
            clearInterval(userSearchInterval);
            clearInterval(continue_search_interval);
        }
        if (request.message === 'stopFollow') {
            clearInterval(followInterval);
        }
        if (request.message === 'stopLike') {

            clearInterval(mainLikeInterval);
            clearInterval(internalTimerLike);
            clearInterval(likeInternalInterval);
            clearInterval(max_id_Like);
        }


        if (request.message === "shareItem") {
            sm();
        }
        if (request.message === "userSearch") {

            clearInterval(userSearchInterval);

            var m_id = 1;

            userSearchInterval = setInterval(function () {

                //  message(request.userName);
                startUserSearch(request.userName, m_id, userSearchInterval);

                message(m_id);
                m_id++;

            }, 2000);

        }

        if (request.message === 'singleFollow') {
            try {
                $.post('/user/' + request.userName + '/follow_user', function (data) {
                    lastUser(request.userName, '', '', 'lastFollow');
                });
            } catch (e) {
                message(e);
            }


            message('User ' + request.userName + ' is followed');
        }

        if (request.message === 'userFollow') {
            clearInterval(followInterval);
            followInterval = setInterval(function () {
                followUser();
            }, 2000);
        }
        if (request.message === "userLike") {
            likeItem();
        }
        if (request.message === "continueUserSearch") {
            continueUserSearch();
        }

    }
);


function continueUserSearch(clearInt) {

    var dbResponse = [];
    var max_id_;
    var query;

    $.post('http://localhost/addonChrome/php/getLastAdded.php', {
        getLast: 'getLast'
    }, function (response) {

        dbResponse = JSON.parse(response);

        query = dbResponse[0];

        max_id_ = dbResponse[2];
    });
    continue_search_interval = setInterval(function () {

        $.ajax(
            {
                url: '/search?query=' + query + '&type=people&max_id=' + max_id_,
                type: "get",
                beforeSend: function () {
                    // do something
                }
            })
            .done(function (data) {
                if (data.html === "") {
                    message("No more records found");
                    clearInterval(search_interval);
                } else {
                    var parsed = $.parseHTML(data.html);
                    var length = parsed.length;

                    message('Parsed length ' + length);

                    $.each(parsed, function (index, element) {

                        var userid = $(element).attr('item-id');
                        var nickName = $(element).find('img').attr('alt');
                        var fullname = $(element).find('h4').find('a').text();
                        recordToBD(userid, nickName, fullname);


                        var lastElement = index === parsed.length - 1;

                        if (lastElement) {
                            lastUser(userid, query, max_id_, 'lastRec');
                            message('Last added user ' + userid);
                        }


                    })
                }
            })
            .fail(function (jqXHR, ajaxOptions, thrownError) {
                message('Server not responding...' + jqXHR);
            });
        max_id_++;
    }, 2000);


}

function startUserSearch(userName, max_id, clearInt) {
    $.ajax(
        {
            url: '/search?query=' + userName + '&type=people&max_id=' + max_id,
            type: "get",
            beforeSend: function () {
                // do something
            }
        })
        .done(function (data) {
            if (data.html === "") {
                message("No more records found");
                clearInterval(clearInt);
            } else {
                var parsed = $.parseHTML(data.html);
                var length = parsed.length;

                message('Parsed length ' + length);

                $.each(parsed, function (index, element) {


                    var userid = $(element).attr('item-id');
                    var nickName = $(element).find('img').attr('alt');
                    var fullname = $(element).find('h4').find('a').text();
                    recordToBD(userid, nickName, fullname);


                    var lastElement = index === parsed.length - 1;

                    if (lastElement) {
                        lastUser(userid, userName, max_id, 'lastRec');
                        message('Last added user' + userid);
                    }


                })
            }
        })
        .fail(function (jqXHR, ajaxOptions, thrownError) {
            message('Server not responding...' + jqXHR);
        });
}


function lastUser(userid, search_input, max_id, type) {
    $.ajax(
        {
            url: 'http://localhost/addonChrome/php/lastAdded.php',
            type: "post",
            data: {
                "userid": userid,
                "search_input": search_input,
                "max_id": max_id,
                "type": type
            },
            beforeSend: function () {
                // do something
            }
        })
        .done(function (data) {
            message(data);

        })
        .fail(function (jqXHR, ajaxOptions, thrownError) {
            message('Server not responding...' + jqXHR);
        });
}


function recordToBD(uid, nname, fname) {
    $.ajax(
        {
            url: 'http://localhost/addonChrome/php/importUser.php',
            type: "post",
            data: {
                "userid": uid,
                "nickname": nname,
                "fullname": fname
            },
            beforeSend: function () {
                // do something
            }
        })
        .done(function (data) {
            message(data);

        })
        .fail(function (jqXHR, ajaxOptions, thrownError) {
            message('Server not responding...' + jqXHR);
        });
}

function followUser() {
    $.ajax(
        {
            url: 'http://localhost/addonChrome/php/followUser.php',
            type: "post",
            data: {
                "followUser": 'followUser'
            },
            beforeSend: function () {
                // do something
            }
        })
        .done(function (data) {
            try {
                message('Followed user ' + data);
                $.post('/user/' + data + '/follow_user', function () {
                    lastUser(data, '', '', 'lastFollow');
                });
            } catch (e) {
                message(e);
            }
        })
        .fail(function (jqXHR, ajaxOptions, thrownError) {
            message('Server not responding...' + jqXHR);
        });
}

function sm() {

    // settings variables

    var i = 0;
    var share = 1;
    var elements = [];
    var max_id = 1;


    var mainShareIn = true;

    // Main Interval

    mainShareInterval = setInterval(function () {

        if (mainShareIn === true) {

            mainShareIn = false;

            $.post('http://localhost/addonChrome/php/getToShare.php', {shared: 'share'}, function (userId) {

                message('Userd ID from DB ' + userId);

                var max_idInBool = true;

                max_idIn = setInterval(function () {

                    if (max_idInBool === true) {
                        max_idInBool = false;

                        $.post("/closet/" + userId + "?sort_by=added_desc&just_in_closet=true&max_id=" + max_id + "", function (data) {




                            var parsed = $.parseHTML(data.html);

                            $.each(parsed, function () {
                                elements.push($(this).find('div').attr("id"));
                                i++;
                            });



                            if (elements[0] === 'undefined') {
                                interTshare = false;
                                max_idInBool = false;
                                max_id = 1;
                                mainShareIn = true;
                            }

                            message('Increment i value ' + i);

                            if (i > 1) {

                                lastUser(userid, '', max_id, 'lastSahre');

                                $.post('http://localhost/addonChrome/php/shared.php', {
                                    shared: 'Y',
                                    userid: userId
                                }, function (dbResp) {
                                    message(dbResp);
                                    message('user marked as shared ' + userId);
                                });



                                message('element length' + elements.length);

                                interTshare = true;

                                internalTimerShare = setInterval(function () {

                                    if (interTshare === true) {

                                        if (share >= elements.length) {
                                            message('shared all items in this max_id');
                                            share = 1;
                                            i = 0;
                                            max_id++;
                                            interTshare = false;
                                            mainShareIn = false;
                                            max_idInBool = true;
                                        } else {

                                            $.post('/listing/share?post_id=' + elements[share] + '', function (data) {

                                                message('Share increment   ' + share + ' shared element ID ' + elements[share]);

                                            });
                                            share++;
                                        }
                                    } else {
                                        // do nothing
                                    }


                                }, 2000);

                                $.post('http://localhost/addonChrome/php/shared.php', {
                                    shared: 'Y',
                                    userid: userId
                                }, function (dbResp) {
                                    message(dbResp);
                                    message('user marked as shared ' + userId);
                                });


                            } else {
                                $.post('http://localhost/addonChrome/php/nolisting.php', {
                                    no_listing: 'Y',
                                    user_Id: userId
                                }, function (dbResp) {
                                    message(dbResp);
                                });
                                message('This user has no listings ' + userId);
                                share = 1;
                                i = 0;
                                max_id = 1;
                                interTshare = false;
                                max_idInBool = false;
                                mainShareIn = true;
                            }

                        });
                    } else {
                        //stop maxID
                    }

                }, 2000);

            });
        } else {
            // if main share is not true do nothing
        }
    }, 2000);
}

function likeItem() {

    var likeIncrement = 0;
    var like = 1;
    var likeElements = [];
    var like_max_id = 1;


    var mainLikeIn = true;

    mainLikeInterval = setInterval(function () {

        if (mainLikeIn === true) {
            mainLikeIn = false;

            $.post('http://localhost/addonChrome/php/getToLike.php', {like: 'like'}, function (likeUserId) {

                message('user id form db ' + likeUserId);

                var like_max_id_interval_bool = true;

                max_id_Like = setInterval(function () {


                    if (like_max_id_interval_bool === true) {
                        like_max_id_interval_bool = false;

                        $.post("/closet/" + likeUserId + "?sort_by=added_desc&just_in_closet=true&max_id=" + like_max_id + "", function (likeData) {

                            var likeParsed = $.parseHTML(likeData.html);

                            $.each(likeParsed, function () {
                                likeElements.push($(this).find('div').attr('id'));
                                likeIncrement++;
                            });
                            if (likeElements[0] === 'undifined') {
                                message('like element is undifined ');
                                likeInternalInterval = false;
                                like_max_id_interval_bool = false;
                                like_max_id = 1;
                                mainLikeIn = true;
                            }
                            message('like increment value ' + likeIncrement);

                            if (likeIncrement > 1) {




                                message('like element length ' + likeElements.length);

                                $.post('http://localhost/addonChrome/php/liked.php', {
                                    like: 'Y',
                                    userid: likeUserId
                                }, function (dbResponse) {
                                    message(dbResponse);
                                    message('user marked as liked ' + likeUserId);
                                });

                                lastUser(likeUserId, '', like_max_id, 'lastLike');

                                likeInternalInterval = true;

                                internalTimerLike = setInterval(function () {

                                    if (likeInternalInterval === true) {

                                        if (like >= likeElements.length) {
                                            like = 1;
                                            likeIncrement = 0;
                                            like_max_id++;
                                            likeInternalInterval = false;
                                            mainLikeIn = false;
                                            like_max_id_interval_bool = true;
                                            message('liked all items in this max_id');
                                        } else {

                                            $.post(' /listing/' + likeElements[like] + '/like', function (likeData) {
                                                message('Like increment   ' + likeData.html + 'Liked element ID ' + likeElements[like]);
                                            });

                                            like++;
                                        }
                                    } else {
                                        // stop internal like interval
                                    }
                                }, 2000);

                            } else {
                                $.post('http://localhost/addonChrome/php/nolisting.php', {
                                    no_listing: 'Y',
                                    user_Id: likeUserId
                                }, function (dbResponse) {
                                    message(dbResponse);
                                });

                                message('this user has no listings ' + likeUserId);
                                like = 1;
                                likeIncrement = 0;
                                like_max_id = 1;
                                likeInternalInterval = false;
                                like_max_id_interval_bool = false;
                                mainLikeIn = true;

                            }
                        });

                    } else {
                        // stop max id interval
                    }

                }, 2000);
            });


        } else {
            // if main like false do nothing
        }

    }, 2000);
}

/*
function stepDebug(todisplay){
      console.log(todisplay);

}*/ // debugger

function message(error) {

    chrome.runtime.sendMessage({textArea: error}, function () {

    });

}































