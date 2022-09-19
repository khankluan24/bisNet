import data from "../db.json" assert { type: "json" };
const swiperWrapper = document.querySelector(".swiper-wrapper");
let renderStar;
const renderCourses = () => {
  data.courseCategory.map((category) => {
    const render = category.courses.map((course) => {
      return `
      <div class="swiper-slide">
    <div class="favourite-course-item card" onclick="window.open('../course/courses.html','_blank')">
      <div class="favourite-course-item__header d-flex flex-column align-items-start px-0">
        <img class="favourite-course-item__header-img img-fluid" src="${
          course.image_url
        }" alt="">
        <a class="course-tag mt-3 ${
          category.title.toLowerCase().includes("front-end") ? "red" : "blue"
        }">${
        category.title.toLowerCase().includes("front-end")
          ? "Front-end"
          : "Back-end"
      }</a>
      </div>
      <div class="favourite-course-item__body card-body px-0 py-0 mt-3">
        <h3 class="favourite-course-item__body-heading fw-bold">${
          course.title
        }</h3>
        <p class="favourite-course-item__body-short-desc text-black mb-3">
          ${course.description}
        </p>
        <hr class="w-75 mb-2">
        <div class="course-action d-flex align-items-center align-items-sm-start align-items-md-center justify-content-between flex-sm-column flex-md-row flex-wrap">
          <div class="shopping-cart d-flex align-items-center justify-content-center ms-1">
            <div class="shopping-cart__symbol d-flex align-items-center justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 17 18"
                fill="none">
                <path
                  d="M0.901855 1.34766L2.61043 1.64559L3.40146 11.1405C3.46471 11.9159 4.10789 12.511 4.88003 12.5085H13.841C14.5778 12.5101 15.2029 11.9639 15.3072 11.229L16.0868 5.80173C16.1739 5.1951 15.7557 4.63235 15.1545 4.54462C15.1019 4.53717 2.88478 4.53304 2.88478 4.53304"
                  stroke="#1CCE66" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.2456 7.59348H12.5234" stroke="#1CCE66" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.51961 15.3789C4.76686 15.3789 4.96647 15.5808 4.96647 15.8291C4.96647 16.0782 4.76686 16.2801 4.51961 16.2801C4.27236 16.2801 4.07275 16.0782 4.07275 15.8291C4.07275 15.5808 4.27236 15.3789 4.51961 15.3789Z"
                  fill="#1CCE66" stroke="#1CCE66" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.7857 15.3789C14.033 15.3789 14.2334 15.5808 14.2334 15.8291C14.2334 16.0782 14.033 16.2801 13.7857 16.2801C13.5385 16.2801 13.3389 16.0782 13.3389 15.8291C13.3389 15.5808 13.5385 15.3789 13.7857 15.3789Z"
                  fill="#1CCE66" stroke="#1CCE66" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <p class="shopping-cart__count mb-0">${Math.floor(
              Math.random() * 100
            )}</p>
          </div>
          <div class="course-rating d-flex align-items-center justify-content-center ms-1 my-2">
            <div class="course-rating__info d-flex align-items-center justify-content-center">
              <p class="course-rating__score mb-0">
              ${course.star}
              </p>
            </div>
            <div class='star-wrapper d-flex'>
            ${new Array(course.star)
              .fill()
              .map(
                (item) =>
                  `<img src="../assets/img/star-icon.png" class="course-rating__icon" alt="Golden star">`
              ).join('')}
           
            </div>
            <p class="course-rating__count mb-0">(${Math.floor(
              Math.random() * 0x100
            )})</p>
          </div>
          <img src="../assets/img/teacher-ava.png" alt="Teacher avatar" class="teacher-ava">
        </div>
        <h2 class="price mb-sm-0 mt-sm-2">${new Intl.NumberFormat("vn-VN", {
          style: "currency",
          currency: "VND",
        }).format(Math.floor(Math.random() * 0x100000))}</h2>
      </div>
    </div>
  </div>
            `;
    });
    swiperWrapper.innerHTML += render.join("");
  });
};

renderCourses();

const mySwiper = new Swiper(".swiper", {
  direction: "horizontal",
  class: "favourite-course__list",
  breakpoints: {
    375: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    576: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1400: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ${Math.floor(
//   Math.random() * 6
// )}

// <img src="../assets/img/star-icon.png" class="course-rating__icon" alt="Golden star">
// <img src="../assets/img/star-icon.png" class="course-rating__icon" alt="Golden star">
// <img src="../assets/img/star-icon.png" class="course-rating__icon" alt="Golden star">
// <img src="../assets/img/star-icon.png" class="course-rating__icon" alt="Golden star">
// <img src="../assets/img/star-icon.png" class="course-rating__icon" alt="Golden star">
