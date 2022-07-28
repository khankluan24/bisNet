var domain = "https://kimovies.live"

var tutorial_id = sessionStorage.getItem("tutorialid");

var email_authenticate = sessionStorage.getItem("email");

var uploadVideo = document.querySelector("#click_here");

function backtoIndex(){
    location.href = "../index-user.html"
}

function toDocument(){
    location.href = "uploadDocumentCouser.html";
}


uploadVideo.addEventListener("click", () => {
    var input = document.createElement('input');
    input.type = 'file';
    input.onchange = async _this => {
        var files = Array.from(input.files);
        if (files && files[0]) {
            var videoTutorial = document.querySelector("#tutorial_video");
            videoTutorial.onload = () => {
                URL.revokeObjectURL(videoTutorial.src);
            }
            videoTutorial.src = URL.createObjectURL(files[0]);
        }
        var formData = new FormData();
        formData.append('file', files[0]);

        var response = await fetch(`${domain}/api/video/upload_file?email=${email_authenticate}&id=${tutorial_id}`, {
            method: "POST",
            body: formData
        });  
        
        if(response.status === 200){
            Toastify({
                text: "Upload video thành công",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "left",
                stopOnFocus: true,
                style: {
                    borderLeft: "4px solid #1CCE65",
                      boxShadow: "0 5px 8px rgb(0 0 0 / 8%)",
                      borderRadius: "6px",
                      color: "#1E232A",
                      fontWeight: "500",
                      background: "#fff"
                },
            }).showToast();
        }
    };

    input.click();
});

