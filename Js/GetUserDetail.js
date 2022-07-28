var domain = "https://kimovies.live"

var email_authenticate = sessionStorage.getItem("email");

window.addEventListener("load", async (e) => {
    await CustomerData();
});

async function CustomerData(){
    var CustomerReposeData = await fetch(`${domain}/api/user?email=${email_authenticate}`,{
        method: "GET",
        contentType: "application/json",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    var user_data = await CustomerReposeData.json();
    document.querySelector("#image_profile").src = user_data.avatar;
    document.querySelector("#user_name").textContent = user_data.fullName;
}


function goTopage(){
    location.href = "search.html"
}


async function logout() {
    var logout = await fetch(`${domain}/api/logout?email=${email_authenticate}`, {
        method: 'GET',
        contentType: "application/json",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    var logoutStatus = await logout.json();
    if (logoutStatus.status === 200) {
        sessionStorage.clear();
    } else {
        Toastify({
            text: "SomeThing went wrong with logout",
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

async function addNews() {
    var newsLink = document.querySelector("#post_news").value;
    var getNewsList = await fetch(`${domain}/api/data_mining?url=${newsLink}`, {
        method: 'GET',
        contentType: "application/json",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    if (newStatuts.status === 200) {
        Toastify({
            text: "We add your news",
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
    } else {
        Toastify({
            text: "Change the link",
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