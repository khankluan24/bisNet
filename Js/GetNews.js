var domain = "https://kimovies.live"
var email = sessionStorage.getItem("email");
window.addEventListener("load", async (e) => {
    await getNews();
});


async function getNews(){
    var repose = await fetch(`${domain}/api/database/news?pageNo=0&pageSize=13`, {
        method: "GET",
        contentType: "application/json",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    var newLaws = await repose.json();

    document.querySelector("#list_img_1").src = newLaws[1].image;
    document.querySelector("#list_text_1").innerText = newLaws[1].title;


    document.querySelector("#source1").addEventListener("click", async function() {
        sessionStorage.setItem("link", `${newLaws[1].share}`);
        sessionStorage.setItem("title_des", `${newLaws[1].title}`);
        sessionStorage.setItem("news_id", `${newLaws[1].id}`);
        location.href="./post-user.html"
    })


    document.querySelector("#list_news2 img").src = newLaws[2].image;
    document.querySelector("#list_news2 .heading").innerText = newLaws[2].title;
    document.querySelector("#list_news2 .sub-heading").innerText = newLaws[2].description.substring(0,268).concat("...");

    document.querySelector("#source2").addEventListener("click", async function() {
        sessionStorage.setItem("link", `${newLaws[2].share}`);
        sessionStorage.setItem("title_des", `${newLaws[2].title}`);
        sessionStorage.setItem("news_id", `${newLaws[2].id}`);
        location.href="./post-user.html"
    })

    
    document.querySelector("#list_news3 img").src = newLaws[3].image;
    document.querySelector("#list_news3 .title").innerText = newLaws[3].title;

    document.querySelector("#list_news3").addEventListener("click", async function() {
        sessionStorage.setItem("link", `${newLaws[3].share}`);
        sessionStorage.setItem("title_des", `${newLaws[3].title}`);
        sessionStorage.setItem("news_id", `${newLaws[3].id}`);
        location.href="./post-user.html"
    })


       
    document.querySelector("#list_news4 img").src = newLaws[4].image;
    document.querySelector("#list_news4 .title").innerText = newLaws[4].title;

    document.querySelector("#list_news4").addEventListener("click", async function() {
        sessionStorage.setItem("link", `${newLaws[4].share}`);
        sessionStorage.setItem("title_des", `${newLaws[4].title}`);
        sessionStorage.setItem("news_id", `${newLaws[4].id}`);
        location.href="./post-user.html"
    })

    document.querySelector("#list_news5 img").src = newLaws[5].image;
    document.querySelector("#list_news5 .title").innerText = newLaws[5].title;
    document.querySelector("#list_news5 .desc").innerText = newLaws[5].description.substring(0,380).concat("...");

    document.querySelector("#list_news5").addEventListener("click", async function() {
        sessionStorage.setItem("link", `${newLaws[5].share}`);
        sessionStorage.setItem("title_des", `${newLaws[5].title}`);
        sessionStorage.setItem("news_id", `${newLaws[5].id}`);
        location.href="./post-user.html"
    })


    document.querySelector("#list_news6 .title").innerText = newLaws[6].title;
    document.querySelector("#list_news6 .desc").innerText = newLaws[6].description.substring(0,88).concat("...");


    document.querySelector("#list_news6").addEventListener("click", async function() {
        sessionStorage.setItem("link", `${newLaws[6].share}`);
        sessionStorage.setItem("title_des", `${newLaws[6].title}`);
        sessionStorage.setItem("news_id", `${newLaws[6].id}`);
        location.href="./post-user.html"
    })

    document.querySelector("#list_news7 .title").innerText = newLaws[7].title;
    document.querySelector("#list_news7 .desc").innerText = newLaws[7].description.substring(0,88).concat("...");

    document.querySelector("#list_news7").addEventListener("click", async function() {
        sessionStorage.setItem("link", `${newLaws[7].share}`);
        sessionStorage.setItem("title_des", `${newLaws[7].title}`);
        sessionStorage.setItem("news_id", `${newLaws[7].id}`);
        location.href="./post-user.html"
    })


    document.querySelector("#list_news8 .title").innerText = newLaws[8].title;
    document.querySelector("#list_news8 .desc").innerText = newLaws[8].description.substring(0,88).concat("...");

    document.querySelector("#list_news8").addEventListener("click", async function() {
        sessionStorage.setItem("link", `${newLaws[8].share}`);
        sessionStorage.setItem("title_des", `${newLaws[8].title}`);
        sessionStorage.setItem("news_id", `${newLaws[8].id}`);
        location.href="./post-user.html"
    })

    document.querySelector("#list_news9 img").src = newLaws[9].image;
    document.querySelector("#list_news9 .post-item__heading").innerText = newLaws[9].title;
    document.querySelector("#list_news9 .post-item__sub-heading").innerText = newLaws[9].description.substring(0,268).concat("...");


    document.querySelector("#list_news9").addEventListener("click", async function() {
        sessionStorage.setItem("link", `${newLaws[9].share}`);
        sessionStorage.setItem("title_des", `${newLaws[9].title}`);
        sessionStorage.setItem("news_id", `${newLaws[9].id}`);
        location.href="./post-user.html"
    })


    document.querySelector("#list_news10 img").src = newLaws[10].image;
    document.querySelector("#list_news10 .post-item__heading").innerText = newLaws[10].title;
    document.querySelector("#list_news10 .post-item__sub-heading").innerText = newLaws[10].description.substring(0,268).concat("...");

    
    document.querySelector("#list_news10").addEventListener("click", async function() {
        sessionStorage.setItem("link", `${newLaws[10].share}`);
        sessionStorage.setItem("title_des", `${newLaws[10].title}`);
        sessionStorage.setItem("news_id", `${newLaws[10].id}`);
        location.href="./post-user.html"
    })

    document.querySelector("#list_news11 img").src = newLaws[11].image;
    document.querySelector("#list_news11 .post-item__heading").innerText = newLaws[11].title;
    document.querySelector("#list_news11 .post-item__sub-heading").innerText = newLaws[11].description.substring(0,268).concat("...");

        
    document.querySelector("#list_news11").addEventListener("click", async function() {
        sessionStorage.setItem("link", `${newLaws[11].share}`);
        sessionStorage.setItem("title_des", `${newLaws[11].title}`);
        sessionStorage.setItem("news_id", `${newLaws[11].id}`);
        location.href="./post-user.html"
    })

}