// ==UserScript==
// @name         视频网站破解
// @namespace    undefined
// @version      0.0.5
// @description  :underage: 视频网站破解(http://ripe.cf/)
// @author       16Free
// @match        http://www.ri003.com/videos/*
// @match        http://91.91p17.space/*
// @require      https://code.jquery.com/jquery-latest.js
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_setClipboard
// ==/UserScript==
$(document).ready(function () {
    var href = window.location.href;

    if(href.indexOf('91.91p17.space')){
        pron91();
    }else if(href.indexOf('www.ri003.com')){
        ri003();
    }

});


function pron91() {
    $(document.body).find('iframe').remove();//ad
    var vidEle = $('#vid_html5_api');
    if(!vidEle){
        return;
    }
    var vidSource = vidEle.find('source');
    if(!vidSource || vidSource.length === 0 || !vidSource[0].src){
        return;
    }
    var url = vidSource[0].src;
    createVideoEle(url);
    
}


function ri003() {
    setCookie('video_log', 0, '.ri003.com', '/');

    if (flashvars) {
        var videoUrl = flashvars.video_url;
        if (videoUrl[videoUrl.length - 1] === '/')
            videoUrl = videoUrl.substr(0, videoUrl.length - 1);

        createVideoEle(videoUrl);
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

function createVideoEle(url) {
    console.log('create video ele, url is :', url);

    var videoDiv = '<div id="user_video_div"><video id="user_video" controls="controls" autoplay></video></div>';
    $(document.body).empty();
    $(document.body).css({
        width: '100%',
        height: '100%'
    });
    $(document.body).append(videoDiv);
    $('#user_video').attr('src', url);
    $('#user_video_div').css({
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        background: '#fff'
    });
    $('#user_video').css({
        width: '100%',
        height: '100%'
    });
}