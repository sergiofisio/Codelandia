const main = document.querySelector("main");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const divPage = document.createElement("div");
const imgLeft = document.createElement("img");
const imgRight = document.createElement("img");
const pPage = document.createElement("p");

const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal__body");

divPage.classList.add("page");
divPage.classList.add("flex");
divPage.classList.add("justify-center");
divPage.classList.add("aligh_center");
imgLeft.classList.add("left");
imgLeft.src = "./assets/icon/arrow_left.svg";
imgLeft.alt = "Left Arrow";
imgRight.classList.add("right");
imgRight.src = "./assets/icon/arrow_right.svg";
imgRight.alt = "Right Arrow";
pPage.textContent = "veja mais noticias";

let start = 0;
let end = 10;
let articles = [];

function allNotice() {
  main.innerHTML = "";
  main.append(divPage);
  divPage.append(imgLeft, pPage, imgRight);
  async function allArticles() {
    try {
      const fullNotice = await notice.get("");
      articles = fullNotice.data.articles;
      for (let i = start; i < end; i++) {
        const article = document.createElement("article");
        const divHead = document.createElement("div");
        const pDate = document.createElement("p");
        const heartIcon = document.createElement("img");
        // const pathIcon = document.createElement("path");
        const divblog = document.createElement("div");
        const h2Title = document.createElement("h2");
        const pMessage = document.createElement("p");

        main.append(article);
        article.append(divHead, divblog);
        divHead.append(pDate, heartIcon);
        // heartIcon.append(pathIcon);
        divblog.append(h2Title, pMessage);

        divHead.classList.add("head");
        divHead.classList.add("flex");
        divHead.classList.add("aligh_center");
        divHead.classList.add("space_between");
        pDate.classList.add("date");

        pDate.textContent = new Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }).format(new Date(articles[i].publishedAt));

        heartIcon.src = "./assets/icon/heart.svg";
        heartIcon.id = "icon";
        // svgIcon.setAttribute("width", "23");
        // svgIcon.setAttribute("height", "20");
        // svgIcon.setAttribute("viewBox", "0 0 200 200");
        // svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        // svgIcon.setAttribute("fill", "#574ae8");
        // pathIcon.setAttribute(
        //   "d",
        //   "M22.25 4.46875C22.1239 3.9753 21.9293 3.50194 21.6718 3.0625C21.4245 2.60536 21.1083 2.18902 20.7343 1.82812C20.1921 1.28771 19.55 0.857859 18.8437 0.562499C17.4221 -0.020955 15.8278 -0.020955 14.4062 0.562499C13.7386 0.845059 13.1253 1.2416 12.5937 1.73437L12.5156 1.82812L11.5 2.84375L10.4843 1.82812L10.4062 1.73437C9.87456 1.2416 9.26125 0.845059 8.5937 0.562499C7.17207 -0.020955 5.57783 -0.020955 4.1562 0.562499C3.44992 0.857859 2.80781 1.28771 2.26558 1.82812C1.52396 2.54973 0.998968 3.4644 0.749951 4.46875C0.617474 4.97878 0.554405 5.50435 0.562451 6.03125C0.562451 6.52656 0.624951 7.02031 0.749951 7.5C0.880941 7.98444 1.0698 8.45135 1.31245 8.89062C1.57451 9.3422 1.89498 9.75724 2.26558 10.125L11.5 19.3594L20.7343 10.125C21.1046 9.76094 21.4218 9.34375 21.6718 8.89062C22.1793 8.0236 22.4438 7.03585 22.4375 6.03125C22.4456 5.50435 22.3825 4.97877 22.25 4.46875ZM20.6875 7.01562C20.5003 7.72956 20.1285 8.38163 19.6093 8.90625L11.4687 17.0312L3.32808 8.90625C3.0628 8.63909 2.83185 8.33991 2.64058 8.01562C2.46059 7.69481 2.31899 7.35392 2.2187 7C2.13864 6.64612 2.09673 6.28468 2.0937 5.92187C2.09582 5.54869 2.13772 5.1768 2.2187 4.8125C2.31605 4.45756 2.45779 4.11632 2.64058 3.79687C2.82808 3.46875 3.05933 3.17187 3.32808 2.90625C3.72948 2.51022 4.20104 2.19232 4.7187 1.96875C5.76185 1.55144 6.92555 1.55144 7.9687 1.96875C8.48433 2.18281 8.94995 2.49687 9.3437 2.89062L11.4687 5.03125L13.5937 2.89062C13.9872 2.49618 14.4544 2.18294 14.9687 1.96875C16.0118 1.55144 17.1756 1.55144 18.2187 1.96875C18.7359 2.19219 19.2078 2.51094 19.6093 2.90625C19.8812 3.16406 20.1093 3.46406 20.2812 3.79687C20.6431 4.4351 20.8316 5.15694 20.8281 5.89062C20.8493 6.26816 20.8178 6.64681 20.7343 7.01562H20.6875Z"
        // );
        divblog.classList.add("blog");
        h2Title.classList.add("title");
        h2Title.textContent = articles[i].title;
        pMessage.classList.add("message");
        pMessage.textContent = articles[i].description;

        divblog.addEventListener("click", (event) => {
          showModal(articles[i]);
        });

        // const icon = document.getElementById("icon");

        // icon.onclick = () => {
        //   icon.classList.toggle("filled");
        // };
      }
    }
  }
  allArticles();
}

allNotice();

function showModal(info) {
  modal.classList.remove("hidden");
  modalBody.innerHTML = "";

  console.log(info);
  const btnClose = document.createElement("img");
  const imgNotice = document.createElement("img");
  const h1Title = document.createElement("h1");
  const h2Author = document.createElement("h2");
  const divNotice = document.createElement("div");
  const pDate = document.createElement("p");
  const pArticle = document.createElement("p");
  const aLink = document.createElement("a");

  modalBody.append(btnClose, imgNotice, h1Title, h2Author, divNotice);
  divNotice.append(pDate, pArticle, aLink);

  btnClose.src = "./assets/icon/close-dark.svg";
  btnClose.alt = "Close";
  btnClose.classList.add("btn_close");

  imgNotice.src = info.urlToImage;
  imgNotice.alt = "Notice Image";
  imgNotice.classList.add("imgNotice");

  h1Title.textContent = info.title;
  h2Author.textContent = info.author;
  divNotice.classList.add("notice");
  pDate.textContent = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(info.publishedAt));
  pDate.classList.add("date");
  pArticle.textContent = info.description;
  pArticle.classList.add("article");

  aLink.classList.add("link_notice");
  aLink.href = info.url;
  aLink.textContent = "read more";
  aLink.target = "_blank";

  btnClose.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

imgLeft.addEventListener("click", () => {
  start -= 10;
  end -= 10;
  if (start < 0) {
    start = articles.length - 10;
    end = articles.length;
    allNotice();
  } else {
    allNotice();
  }
});
imgRight.addEventListener("click", () => {
  start += 10;
  end += 10;
  if (end > articles.length) {
    start = 0;
    end = 10;
    allNotice();
  } else {
    allNotice();
  }
});
