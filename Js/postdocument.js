var domain = "https://kimovies.live"

var email_authenticate = sessionStorage.getItem("email");

var tutorial_id = sessionStorage.getItem("tutorialid");

var doc = document.querySelector("#openload");

doc.addEventListener("click", () => {
    var input = document.createElement('input');
    input.type = 'file';
    input.onchange = async _this => {
        var files = Array.from(input.files);
        var formData = new FormData();
        formData.append('file', files[0]);

        var response = await fetch(`${domain}/api/document/upload_file?email=${email_authenticate}&id=${tutorial_id}`, {
            method: "POST",
            body: formData
        });

        if(response.status === 200){
            Toastify({
                text: "Upload file thành công",
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
        location.href = "../index-user.html";
    };

    input.click();
});
