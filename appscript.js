// Set constraints for the video stream
var constraints = { video: true, audio: false, facingMode: "environment" };

// Define constants
const cameraView = document.querySelector("#camera--view");
const leftView = document.querySelector("#camera--View").cloneNode(true);
const rightView = document.querySelector("#camera--View").cloneNode(true);
    
// Access the device camera and stream to cameraView
function cameraStart() {
navigator.mediaDevices
.getUserMedia(constraints)
.then(function(stream) {
cameraView.srcObject = stream;
leftView.srcObject = stream;
rightView.srcObject = stream;
})
.catch(function(error) {
console.error("Oops. Something is broken.", error);
});
}
    
// Start the video stream when the window loads 
window.addEventListener("load", cameraStart, false);
    
const cameraViews = document.querySelectorAll("#camera--view");
