var domain = "https://kimovies.live"

async function loginHere() {
    var email_authentication =  document.querySelector("#email_input").value;
    var payload = JSON.stringify({
        email: document.querySelector("#email_input").value,
        password: document.querySelector("#pass_input").value
    });
    var response_login = await fetch(`${domain}/api/login`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: payload
    })


    if (response_login.status >= 200 && response_login.status <= 299) {
        sessionStorage.setItem("email", email_authentication);
        location.href = "../index-user.html";
        Toastify({
            text: "Đăng nhập thành công",
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
    } else if (response_login.status === 401) {
        Toastify({
            text: "Không tìm thấy tài khoản!",
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
    } else if (response_login.status === 400) {
        document.querySelector('.login-unsuccess').style.display = 'block';
        Toastify({
            text: "Sai mật khẩu người dùng",
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
    } else if (response_login.status === 403){
        Toastify({
            text: "Có thể một lỗi nào ở sever developer của chúng tôi sẽ vào điều tra ngây lập tức xin lỗi vì tình huống này!",
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
    } else {
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
    }
}

async function registerHere() {
    var payload = JSON.stringify({
        email: document.querySelector("#email_register").value,
        password: document.querySelector("#pass_register").value,
        fullName: document.querySelector("#full_name_register").value,
        phone: document.querySelector("#phone_register").value,
        co_password: document.querySelector("#confirm_pass").value
    });
    var register_reponse = await fetch(`${domain}/api/register`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: payload
    })

    if (register_reponse.status === 200) {
        Toastify({
            text: "Bạn hãy kiểm tra gmail của mình nhé nếu không nhận được gmail thì bạn nhập sai gmail",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                borderLeft: "4px solid #0387D8",
                boxShadow: "0 5px 8px rgb(0 0 0 / 8%)"
            },
        }).showToast();
    } else if (register_reponse.status === 403) {
        Toastify({
            text: "Tài khoản đã tồn tại trong hệ thống",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                borderLeft: "4px solid #0387D8",
                boxShadow: "0 5px 8px rgb(0 0 0 / 8%)"
            },
        }).showToast();
    } else if (register_reponse.status === 400) {
        Toastify({
            text: "Hiện tại chúng tôi chỉ sử dụng gmail cá nhân với đuôi @gmail.com mong bạn thông cảm",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                 borderLeft: "4px solid #FFCB12",
                boxShadow: "0 5px 8px rgb(0 0 0 / 8%)"
            },
        }).showToast();
    } else if (register_reponse.status === 401) {
        Toastify({
            text: "Hai mật khẩu nhập không khớp nhau",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #8a23cd, #cb00a9, #f0007e, #ff0051, #ff2020)"
            },
        }).showToast();
    } else if (register_reponse.status === 405){
        Toastify({
            text: "Mật khẩu tối thiểu là 8 kí tự",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #8a23cd, #cb00a9, #f0007e, #ff0051, #ff2020)"
            },
        }).showToast();
    }else {
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
                boxShadow: "0 5px 8px rgb(0 0 0 / 8%)"
            },
        }).showToast();
    }
}

async function sendForgotPassword() {
    var payload = JSON.stringify({
        email: document.querySelector("#email-for-pass").value
    });
    var response_pw = await fetch(`${domain}/api/send_forgot_password`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: payload
    });

    if (response_pw.status === 401) {
        Toastify({
            text: "Không tìm thấy email in system",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #8a23cd, #cb00a9, #f0007e, #ff0051, #ff2020)"
            },
        }).showToast();
    } else if (response_pw.status === 403) {
        Toastify({
            text: "Cần xác nhận email đầu tiên",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #8a23cd, #cb00a9, #f0007e, #ff0051, #ff2020)"
            },
        }).showToast();
    } else if (response_pw.status >= 200 && response_pw.status <= 299) {
        Toastify({
            text: "Chúng tôi đã gửi email cho máy bạn hãy kiểm tra",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #8a23cd, #cb00a9, #f0007e, #ff0051, #ff2020)"
            },
        }).showToast();
    }
}