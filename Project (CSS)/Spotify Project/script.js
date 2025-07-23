const slider = document.getElementById("volumeSlider");
const volumeLabel = document.getElementById("volumeLabel");

slider.addEventListener("input", function() {
    let volume = this.value;
    volumeLabel.textContent = `Volume: ${volume}%`;

    // Change background color based on volume
    if (volume >= 50) {
        slider.style.background = "blue";
    } else {
        slider.style.background = "gray";
    }
});