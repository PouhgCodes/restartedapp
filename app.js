document.addEventListener("DOMContentLoaded", () => {
    const constraints = {
        video: {
            facingMode: "environment",
            aspectRatio: 1.0
        },
        audio: false
    };

    let videoElements = document.querySelectorAll("video");

    navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
            videoElements.forEach((videoElement) => {
                videoElement.srcObject = stream;
                videoElement.addEventListener("loadedmetadata", () => {
                    videoElement.play()
                        .catch((error) => {
                            console.error("Playback error:", error)
                        });
                });
            });
        })
        .catch((error) => {
            console.error("Camera access denied or error:", error);
        });
    });
