// ==UserScript==
// @name         视频网站破解
// @namespace    undefined
// @version      0.0.2
// @description  :underage: 视频网站破解
// @author       16Free
// @match        http://www.ri003.com/videos/*
// @require      https://code.jquery.com/jquery-latest.js
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_setClipboard
// ==/UserScript==
$(document).ready(function () {
    setCookie('video_log', 0, '.ri003.com', '/');

    createVideoEle();
});


function setCookie(name, value, domain, path) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    var cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";domain=" + domain + ";path=" + path;
    document.cookie = cookie;

    console.log('set cookie:', cookie);
}

function createVideoEle() {
    if (flashvars) {
        var videoUrl = flashvars.video_url;
        if (videoUrl[videoUrl.length - 1] === '/')
            videoUrl = videoUrl.substr(0, videoUrl.length - 1);

        console.log('create video ele, url is :', videoUrl);

        var videoDiv = '<div id="user_video_div"><video id="user_video" controls="controls" autoplay></video></div>';
        $(document.body).empty();
        $(document.body).css({
            width: '100%',
            height: '100%'
        });
        $(document.body).append(videoDiv);
        $('#user_video').attr('src', videoUrl);
        $('#user_video_div').css({
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            background:'#fff'
        });
        $('#user_video').css({
            width: '100%',
            height: '100%'
        });
    }
}
