var domain = "https://kimovies.live"
var email_authenticate = sessionStorage.getItem("email");

var Link = sessionStorage.getItem("link");
var title = sessionStorage.getItem("title_des");

var id = sessionStorage.getItem("news_id");
async function readNews(){
    var repose = await fetch(`${Link}`, {
        method: "GET",
        contentType: "application/json",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    var newtabs = await repose.json();
    document.querySelector("#text_var").innerHTML += title;

    for(var h in newtabs.News){
        var ne = newtabs.News[h];
        var list_date = document.querySelector("#list_date_text");
        if(ne.Title != null){
            list_date.innerHTML += `<h3 class="title">${ne.Title}</h3><hr class="w-50">`
        }

        if(ne.text != null){
            list_date.innerHTML += `<p class="desc">${ne.text}</p>`
        }

        if(ne.image != null){
            list_date.innerHTML += `<div class="article-img-container"><img src="${ne.image}" alt="Article image" class="article-img"></div>`
        }
        if(ne.VideoSrc != null){
            list_date.innerHTML += `<iframe width="420" height="315" src="${ne.VideoSrc}"></iframe>`
        }
        if(ne.Note != null){
            list_date.innerHTML += `<div class="article-desc"><ul><li><b>Note</b>: ${ne.Note}</li></ul></div>`
        }
    }  
}



window.addEventListener("load", async (e) =>{
    await readNews();
    await getComment();
})


function sendComment(){
    var payload = JSON.stringify({
        detailComment: document.querySelector("#text_value").value
    });
    var comment = fetch(`${domain}/api/news/comment?email=${email_authenticate}&id=${id}`, {
        method: "POST",
        contentType: "application/json",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: payload,
    });
    if(comment.status === 200){
        Toastify({
            text: "Đăng bình luận thành công",
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

}       

async function getComment(){
    var comment_get = await fetch(`${domain}/api/news/get_all_comment?id=${id}`, {
        method: "GET",
        contentType: "application/json",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });

    var res = await comment_get.json();
    console.log(res)
    for(var n in res){
        var fe = res[n];
        document.querySelector("#comment_list").innerHTML +=
        `<div class="d-flex align-items-center mb-2">
        <img src="${fe.image}" alt="User comment avatar" class="user-comment__avatar">
        <div class="user-response">
          <div class="d-flex flex-row align-items-center mb-2">
            <p class="other-user-comment__name me-2">${fe.name_comment}</p>
            <div class="other-user-comment__time">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock me-2" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
              </svg>
              9 months ago
            </div>
          </div>
          <input 
          type="text" 
          class="form-control" 
          placeholder="${fe.des}">
        </div>
      </div>
      `
    }
}
