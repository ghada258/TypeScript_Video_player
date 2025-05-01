const Video = document.querySelector("video") as HTMLVideoElement;
const time_slider = document.querySelector('input[type="range"][oninput*="changeTime"]') as HTMLInputElement;

function change_Video(Video_src: string): void {
    Video.src = Video_src;
    Video.load();
    Video.play(); 
}

function playVideo(): void {
    Video.play();
}

function pauseVideo(): void {
    Video.pause();
}

function stopVideo(): void {
    Video.load();
    Video.pause();
}

function muteVideo(): void {
    Video.muted = !Video.muted;
}

function changeVol(range: HTMLInputElement): void {
    Video.volume = parseFloat(range.value);
}

function changeTime(range: HTMLInputElement): void {
    Video.currentTime = parseFloat(range.value);
}

Video.addEventListener('loadedmetadata', () => {
    time_slider.max = Video.duration.toString();
});

Video.addEventListener('timeupdate', () => {
    time_slider.value = Video.currentTime.toString();
});
