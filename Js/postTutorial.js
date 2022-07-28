var domain = "https://kimovies.live"

var email_authenticate = sessionStorage.getItem("email");

async function postTutorial() {
    var payload = JSON.stringify({
        title: document.querySelector("#title_tutorial").value,
        image: document.querySelector("#image_tutorial").value,
        price: document.querySelector("#prices_tutorial").value,
        des: document.querySelector("#des_tutorial").value
    });
    var response = await fetch(`${domain}/api/tutorial/post?email=${email_authenticate}`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: payload
    })

    var jst = await response.json();
    
    console.log(jst);

    if (response.status === 400) {
        Toastify({
            text: "Chỉ giáo viên mới được up bài giảng",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                borderLeft: "4px solid #0387D8",
                boxShadow: "0 5px 8px rgb(0 0 0 / 8%)",
                borderRadius: "6px",
                color: "#1E232A",
                fontWeight: "500",
                background: "#fff"
            },
        }).showToast();
    } else if(response.status === 200){
        location.href = "../course/uploadMaterialCouser.html";
        sessionStorage.setItem("tutorialid", jst);
        Toastify({
            text: "Upload thành công",
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
    }  else if(response.status === 403){
        Toastify({
            text: "Bạn cần đăng nhập để tiếp tục",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                borderLeft: "4px solid #FFCB12",
                boxShadow: "0 5px 8px rgb(0 0 0 / 8%)",
                borderRadius: "6px",
                color: "#1E232A",
                fontWeight: "500",
                background: "#fff"
            },
        }).showToast();
    }  else if(response.status === 502) {
        Toastify({
            text: "Có vấn để ở sever",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                borderLeft: "4px solid #E82C4A",
                boxShadow: "0 5px 8px rgb(0 0 0 / 8%)",
                borderRadius: "6px",
                color: "#1E232A",
                fontWeight: "500",
                background: "#fff"
            },
        }).showToast();
    }   else {
        Toastify({
            text: "Bạn cần điền đầy đủ thông tin",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                borderLeft: "4px solid #FFCB12",
                boxShadow: "0 5px 8px rgb(0 0 0 / 8%)",
                borderRadius: "6px",
                color: "#1E232A",
                fontWeight: "500",
                background: "#fff"
            },
        }).showToast();
    }
    
}