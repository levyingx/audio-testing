import './VolumeFader.css';

const config = {
    min: 0,
    max: 1,
    value: 0.5,
    step: 0.01
}

class VolumeFader {
    constructor(audioContext, mediaElementSource) {
        this.element = document.createElement('input');
        this.element.id = "volume";
        this.element.type = "range";
        this.element.min = config.min;
        this.element.max = config.max;
        this.element.value = config.value;
        this.element.step = config.step;

        this.gainNode = new GainNode(audioContext);
        mediaElementSource.connect(this.gainNode).connect(audioContext.destination);

        this.element.addEventListener("input", () => {
            this.gainNode.gain.value = this.element.value;
            console.log(gainNode.gain.value);
        })
    }

    setRange(min, max) {
        this.element.min = min;
        this.element.max = max;
    }
}

export default VolumeFader;