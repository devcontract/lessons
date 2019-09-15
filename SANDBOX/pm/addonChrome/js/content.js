var userSearchInterva = null;
var followInterval = null;
var shareInterval = null;
var shareIntervalMaster = null;
var get_data = null;

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

        if (request.message === 'stop') {
            if (request.stop === 'stopSearch') {
                clearInterval(userSearchInterva);
            }
            if (request.stop === 'stopFollow') {
                clearInterval(followInterval);
            }
        }

        if (request.message === "shareItem") {
            shareItemm();
        }

        if (request.message === "userSearch") {

            clearInterval(userSearchInterva);

            var m_id = 1;

            userSearchInterva = setInterval(function () {

                //console.log(request.userName);
                startUserSearch(request.userName, m_id, userSearchInterva);

                console.log(m_id);
                m_id++;

            }, 2000);

        }
        if (request.message === 'userFollow') {

            clearInterval(followInterval);

            followInterval = setInterval(function () {
                askDb();
            }, 2000);

        }
    }
);


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
                console.log("No more records found");
                clearInterval(clearInt);
            } else {

                var parsed = $.parseHTML(data.html);

                $.each(parsed, function (index, element) {
                    // console.log(element);
                    var userid = $(element).attr('item-id');
                    var nickName = $(element).find('img').attr('alt');
                    var fullname = $(element).find('h4').find('a').text();
                    console.log(nickName);
                    console.log(fullname);
                    console.log(userid);
                    // console.log(lastname);

                    recordToBD(userid, nickName, fullname);

                })
            }

        })
        .fail(function (jqXHR, ajaxOptions, thrownError) {
            console.log('server not responding...' + jqXHR);
        });
}

function recordToBD(uid, nname, fname) {
    $.ajax(
        {
            url: 'http://localhost/addonChrome/php/bdrecord.php',
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
            console.log(data);

        })
        .fail(function (jqXHR, ajaxOptions, thrownError) {
            console.log('server not responding...' + jqXHR);
        });
}

function askDb() {

    $.ajax(
        {
            url: 'http://localhost/addonChrome/php/askdb.php',
            type: "post",
            data: {
                "askdb": 'ask'
            },
            beforeSend: function () {
                // do something
            }
        })
        .done(function (data) {
            try {
                console.log('followed ' + data);
                $.post('/user/' + data + '/follow_user', function () {
                });
            } catch (e) {
                console.log(e);
            }
        })
        .fail(function (jqXHR, ajaxOptions, thrownError) {
            console.log('server not responding...' + jqXHR);
        });
}


function shareItemm() {
    $.ajax(
        {
            url: 'http://localhost/addonChrome/php/askdb.php',
            type: "post",
            data: {
                "askdb": 'ask'
            },
            beforeSend: function () {
                // do something
            }
        })
        .done(function (currID) {
            try {

                var i = 0;
                var share = 1;
                var elements = [];
                var max_id = 1;
                console.log('nachalo intervala '+ currID);



    $.post("/closet/" + currID + "?sort_by=added_desc&just_in_closet=true&max_id=" + max_id + "", function (data) {
        var parsed = $.parseHTML(data.html);
        console.log("parsed data " + parsed);

        $.each(parsed, function () {
            elements.push($(this).find('div').attr("id"));
            console.log('increment ' + i);
            i++;
        });

        if (i > 1) {

            console.log('stoped main interval');

            intervalStartStop('stop', shareIntervalMaster);

            shareInterval = setInterval(function () {

                console.log('element length = ' + elements.length);
                console.log('share  = ' + share);

                if (share >= elements.length) {

                    intervalStartStop('stop', shareInterval);

                    console.log('shared all items in this max_id');
                    share = 1;


                } else {
                    console.log('element id to share'+ elements[share]);
                    $.post('/listing/share?post_id=' + elements[share]);
                    console.log('shared element ' + elements[share]);
                    share++;
                }


            }, 2000);
            max_id++;
            intervalStartStop('start', shareIntervalMaster);
        }


    });








            } catch (e) {
                console.log(e);
            }
        })
        .fail(function (jqXHR, ajaxOptions, thrownError) {
            console.log('server not responding...' + jqXHR);
        });
}


function intervalStartStop(bool, interV) {
    if (bool === 'stop') {
        clearInterval(interV);
    }
    if (bool === 'start') {
        interV;
    }
}