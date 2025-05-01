"use strict";
const Video = document.querySelector("video");
const time_slider = document.querySelector('input[type="range"][oninput*="changeTime"]');
function change_Video(Video_src) {
    Video.src = Video_src;
    Video.load();
    Video.play();
}
function playVideo() {
    Video.play();
}
function pauseVideo() {
    Video.pause();
}
function stopVideo() {
    Video.load();
    Video.pause();
}
function muteVideo() {
    Video.muted = !Video.muted;
}
function changeVol(range) {
    Video.volume = parseFloat(range.value);
}
function changeTime(range) {
    Video.currentTime = parseFloat(range.value);
}
Video.addEventListener('loadedmetadata', () => {
    time_slider.max = Video.duration.toString();
});
Video.addEventListener('timeupdate', () => {
    time_slider.value = Video.currentTime.toString();
});
