    let value = null;
    let inter = setInterval(function () {
        progBar();
    }, 100);
    function progBar() {
   let  cData = JSON.parse(window.countData);
   let  follow_user_data = (cData['FOLLOWED_COUNTS'] / cData['TOTAL_COUNTS']) * 100;
   let  share_user_data = (cData['SHARED_COUNTS'] / cData['TOTAL_COUNTS']) * 100;
   let  like_user_data = (cData['LIKED_COUNTS'] / cData['TOTAL_COUNTS']) * 100;

        $(".progress").each(function () {
            if (localStorage.getItem('tab') === 'Like') {
                value = Math.floor(like_user_data);
                if (value <= 0) {
                    value = 0.01;
                }
            }
            if (localStorage.getItem('tab') === 'Follow') {
                value = Math.floor(follow_user_data);
            }

            if (localStorage.getItem('tab') === 'Share') {
                value = Math.floor(share_user_data);
                if (value <= 0) {
                    value = 0.01;
                }
            }


            var left = $(this).find('.progress-left .progress-bar');
            var right = $(this).find('.progress-right .progress-bar');
            if (value > 0) {
                if (value <= 50) {
                    right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
                } else {
                    right.css('transform', 'rotate(180deg)')
                    left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
                }
            }

        })
    }

    function percentageToDegrees(percentage) {
        return percentage / 100 * 360
    }

