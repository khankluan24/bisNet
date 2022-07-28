var link = "https://kimovies.live";


var email = sessionStorage.getItem("email");

window.addEventListener("load", async (e) => {
  await TutorialNews();
});


async function TutorialNews() {
  var tutorial = await fetch(`${link}/api/tutorial/getAll`, {
    method: "GET",
    contentType: "application/json",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  var okela = await tutorial.json();
  for (var h in okela) {
    var ne = okela[h];
    document.querySelector(".owl-stage").innerHTML += `
    <div class="owl-item">
    <div class="row favourite-course-list" id="list_tutorial">
                <div class="favourite-course-item card">
                    <div class="favourite-course-item__header">
                        <img class="favourite-course-item__header-img img-fluid mb-3" src="${ne.image}" alt="">
                        <a class="course-tag--sql course-tag">SQL Server</a>
                    </div>
                    <div class="favourite-course-item__body card-body px-0 pb-0">
                        <h3 class="favourite-course-item__body-heading">${ne.title}</h3>
                        <p class="favourite-course-item__body-short-desc">
                            ${ne.des.substring(0, 25).concat("...")}
                        </p>
                        <hr>
                        <div class="course-action">
                            <div class="shopping-cart">
                                <div class="shopping-cart__symbol">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 17 18" fill="none">
                                        <path
                                                d="M0.901855 1.34766L2.61043 1.64559L3.40146 11.1405C3.46471 11.9159 4.10789 12.511 4.88003 12.5085H13.841C14.5778 12.5101 15.2029 11.9639 15.3072 11.229L16.0868 5.80173C16.1739 5.1951 15.7557 4.63235 15.1545 4.54462C15.1019 4.53717 2.88478 4.53304 2.88478 4.53304"
                                                stroke="#1CCE66" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.2456 7.59348H12.5234" stroke="#1CCE66" stroke-width="1.5" stroke-linecap="round"
                                              stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M4.51961 15.3789C4.76686 15.3789 4.96647 15.5808 4.96647 15.8291C4.96647 16.0782 4.76686 16.2801 4.51961 16.2801C4.27236 16.2801 4.07275 16.0782 4.07275 15.8291C4.07275 15.5808 4.27236 15.3789 4.51961 15.3789Z"
                                              fill="#1CCE66" stroke="#1CCE66" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M13.7857 15.3789C14.033 15.3789 14.2334 15.5808 14.2334 15.8291C14.2334 16.0782 14.033 16.2801 13.7857 16.2801C13.5385 16.2801 13.3389 16.0782 13.3389 15.8291C13.3389 15.5808 13.5385 15.3789 13.7857 15.3789Z"
                                              fill="#1CCE66" stroke="#1CCE66" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <p class="shopping-cart__count mb-0">269</p>
                            </div>
                            <div class="course-rating">
                                <div class="course-rating__info">
                                    <p class="course-rating__score mb-0">4.3</p>
                                </div>
                                <img src="../assets/img/star-icon.png" class="course-rating__icon" alt="Golden star">
                                <img src="../assets/img/star-icon.png" class="course-rating__icon" alt="Golden star">
                                <img src="../assets/img/star-icon.png" class="course-rating__icon" alt="Golden star">
                                <img src="../assets/img/star-icon.png" class="course-rating__icon" alt="Golden star">
                                <img src="../assets/img/star-icon.png" class="course-rating__icon" alt="Golden star">
                                <p class="course-rating__count mb-0">(100)</p>
                            </div>
                            <img src="../assets/img/teacher-ava.png" alt="Teacher avatar" class="teacher-ava">
                        </div>
                        <h2 class="price">${ne.price}</h2>
                    </div>
                </div>
            </div>
    </div>
    `
    document.querySelector("#clickDocument").addEventListener("click", function () {
        sessionStorage.setItem("idTutorial", `${ne.id}`);
        sessionStorage.setItem("email", `${email}`);
        if ((window.location.pathname == '/index.html') || (window.location.pathname =='/index-user.html')) {
            location.href = "../course/course.html";
        }
        else if (window.location.pathname == '/course/courses.html') {
            location.href = "./course.html";
        }
        else if (window.location.pathname == '/') {
            location.href = "./course.html";
        }
    })
  }
}