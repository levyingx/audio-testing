class PlayButton {
    constructor(audioContext, audioElement) {
        this.element = document.createElement('button');
        this.element.dataset.playing = "false";
        this.element.className = "";
        this.element.innerHTML = '<i class="fa-solid fa-play"></i>';
        
        this.element.addEventListener("click", () => {
            if (audioContext.state == "suspended") {
                audioContext.resume();
            } 
        
            if (this.element.dataset.playing == "false") {
                audioElement.play();
                this.element.dataset.playing = "true";
            } else if (this.element.dataset.playing = "true") {
                audioElement.pause();
                this.element.dataset.playing = "false";
            }
        });

        audioElement.addEventListener("ended", () => {
            this.element.dataset.playing = "false";
        });
    }
}

export default PlayButton;