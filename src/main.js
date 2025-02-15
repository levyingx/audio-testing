import VolumeFader from "./components/VolumeFader";
import PlayButton from "./components/PlayButton";

const app = document.getElementById('app');
app.className = "w-full h-full bg-slate-500";

const audioContext = new AudioContext();

const player = document.createElement('audio');
player.src = "/src/audio/star_imanu_remix.mp3";
player.className = "border border-gray-700";
// player.addEventListener("ended", () => {
//     playButton.dataset.playing = "false";
// });

const track = audioContext.createMediaElementSource(player);

const volume = new VolumeFader(audioContext, track);
const play = new PlayButton(audioContext, player);

app.appendChild(volume.element);
app.appendChild(player);
app.appendChild(play.element);