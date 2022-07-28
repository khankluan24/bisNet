var domain = "https://kimovies.live"

var id = sessionStorage.getItem("idTutorial");

var email_login = sessionStorage.getItem("email");
var watchvideoLink = domain.concat("/media/watch?link=")

async function getTutorial() {
    var repse = await fetch(`${domain}/api/tutorial/learning?email=${email_login}&id=${id}`, {
        method: "GET",
        contentType: "application/json",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });

    var reas = await repse.json();

    document.querySelector("#titleTutorial").textContent = reas.title;
    document.querySelector("#imageTutorial").src = reas.image;
    document.querySelector("#des").textContent = reas.des;
}


async function getVideo() {
    var repse = await fetch(`${domain}/api/tutorial/video/resources?email=${email_login}&id=${id}`, {
        method: "GET",
        contentType: "application/json",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });

    var videoList = await repse.json();

    for (var l in videoList) {
        var listnast = videoList[l]
        document.querySelector("#VideoCourse").innerHTML +=
            `
                            <div class="lession-track form-check">
                                <div class="ms-3 ms-md-0 ms-xl-3">
                                    <div class="lession-name">Video Tutorial ${l + 1}</div>
                                    <a href="${watchvideoLink.concat(listnast.link)}" class="lession-direct">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                class="bi bi-play-circle"
                                                viewBox="0 0 16 16"
                                        >
                                            <path
                                                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                            />
                                            <path
                                                    d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
                                            />
                                        </svg>
                                        
                                    </a>
                                </div>
                            </div>
        `
    }
}

async function getDocument() {
    var repse = await fetch(`${domain}/api/tutorial/document/resources?email=${email_login}&id=${id}`, {
        method: "GET",
        contentType: "application/json",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });

    var reas = await repse.json();
    for (var ls in reas) {
        var de = reas[ls];
        document.querySelector("#listPdf").innerHTML +=
            `
             <a href="${domain.concat(de.link)}">
                    Click to download file tutorial ${ls + 1}
             </a> 
            `
    }
}


window.addEventListener("load", async (e) => {
    await getTutorial();
    await getVideo();
    await getDocument();
});



