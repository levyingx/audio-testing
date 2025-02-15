const app = document.getElementById('app');
app.className = "w-full h-full bg-neutral-100";

const audioContext = new AudioContext();

const player = document.createElement('audio');
player.src = "/src/audio/star_imanu_remix.mp3";
player.className = "border border-gray-700";
player.addEventListener("ended", () => {
    playButton.dataset.playing = "false";
});

const track = audioContext.createMediaElementSource(player);

const playButton = document.createElement('button');
playButton.dataset.playing = "false";
playButton.className = "px-2 py-1 bg-neutral-300/50"
playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
playButton.addEventListener("click", () => {
    if (audioContext.state == "suspended") {
        audioContext.resume();
    } 

    if (playButton.dataset.playing == "false") {
        player.play();
        playButton.dataset.playing = "true";
    } else if (playButton.dataset.playing = "true") {
        player.pause();
        playButton.dataset.playing = "false";
    }
});

const gainNode = audioContext.createGain();
track.connect(gainNode).connect(audioContext.destination);

const volume = document.createElement('input');
volume.type = "range";
volume.id = "volume";
volume.min = "0";
volume.max = "1";
volume.value = "0";
volume.step = "0.01";

volume.addEventListener("input", () => {
    gainNode.gain.value = volume.value;
    console.log(gainNode.gain.value);
})


app.appendChild(volume);
app.appendChild(player);
app.appendChild(playButton);