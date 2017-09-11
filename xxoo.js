// ==UserScript==
// @name         小黄片去广告
// @namespace    undefined
// @version      0.0.5
// @description  小黄片去广告，绕过会员机制
// @author       16Free
// @match        http://www.ri003.com/*
// @match        http://www.1717she.fun/*
// @require      https://code.jquery.com/jquery-latest.js
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_setClipboard
// ==/UserScript==
$(document).ready(function () {
    ri003();
});

function ri003() {
    setCookie('video_log', 0, '.ri003.com', '/');

    //ad
    $('div[align="center"]').remove();
    $('div.footer-margin').remove();
    $('noindex').remove();
    $('qq').remove();

    if (flashvars) {
        var videoUrl = flashvars.video_url;
        if (videoUrl[videoUrl.length - 1] === '/')
            videoUrl = videoUrl.substr(0, videoUrl.length - 1);

        console.log('play video url :', videoUrl);
        createVideoEle('#kt_player',videoUrl);
    }


}

function setCookie(name, value, domain, path) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    var cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";domain=" + domain + ";path=" + path;
    document.cookie = cookie;

    console.log('set cookie:', cookie);
}

function createVideoEle(ele,url) {
    var videoDiv = '<div id="user_video_div"><video id="user_video" controls="controls" autoplay></video></div>';
    $(ele).html(videoDiv);
    $('#user_video').attr('src', url);
    $('#user_video_div').css({
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        background: '#fff'
    });
    $('#user_video').css({
        width: '100%',
        height: '100%'
    });
}