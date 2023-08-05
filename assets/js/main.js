window.addEventListener("load", loaded);
const bodyEl = document.body;
function loaded() {
  bodyEl.classList.add("loaded");
}
// funcyion is mobile

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  },
};
if (!isMobile.any()) {
  document.body.classList.contains("_touch") ? document.body.classList.remove("_touch") : null;
  document.body.classList.add("_pc");
} else {
  document.body.classList.contains("_pc") ? document.body.classList.remove("_pc") : null;
  document.body.classList.add("_touch");
}
// ibg image

function ibg() {
  let ibg = document.querySelectorAll("._ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();
//============Menu burger start=========================================================

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock"); //stop scroll
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    e.preventDefault();
  });
}

//============Menu burger end===========================================================
//============Scroll onClick start========================================================

// HTML <a dataset-goto=".class"/>'

const menuLinks = document.querySelectorAll("[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector(".header").offsetHeight;

      if (iconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock"); //stop scroll
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
      }
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}
//============Scroll onClick end========================================================

// text animation
(function ($) {
  var s,
    spanizeLetters = {
      settings: {
        letters: $(".js-spanize"),
      },
      init: function () {
        s = this.settings;
        this.bindEvents();
      },
      bindEvents: function () {
        s.letters.html(function (i, el) {
          //spanizeLetters.joinChars();
          var spanizer = $.trim(el).split("");
          return "<span>" + spanizer.join("</span><span>") + "</span>";
        });
      },
    };
  spanizeLetters.init();
})(jQuery);
//============animation start===========================================================

const animItems = document.querySelectorAll("._anim-item");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeigth = animItem.offsetHeight;
      const animItemOffset = animItem.getBoundingClientRect().top + scrollY;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeigth / animStart;

      if (animItemHeigth > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (scrollY > animItemOffset - animItemPoint && scrollY < animItemOffset + animItemHeigth) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide"))
          // не прятать после прокрутки
          animItem.classList.remove("_active");
      }
    }
  }
  setTimeout(() => {
    animOnScroll();
  }, 400);
}
//============animation end===========================================================
