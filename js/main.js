const navbar = document.querySelector("nav");
document.addEventListener("scroll", function () {
  if (window.scrollY >= 2) {
    navbar.classList.add("navbarSwitch");
  } else {
    navbar.classList.remove("navbarSwitch");
  }
});

//Start DropDown
const iconDrop = document.querySelector("#Link");
const dropLinks = document.querySelector(".Links");
iconDrop.addEventListener("click", (event) => {
  event.preventDefault();
  iconDrop.classList.toggle("Dotts");
  dropLinks.classList.toggle("UlLinks");
});
//End DropDown

// Skills Section
let sectionSkills = document.querySelector(".SectionOurSkills");
let progressSpans = document.querySelectorAll(".progress span");

// Facts Section
let nums = document.querySelectorAll(".nums .num");
let facts = document.querySelector(".SectionFacts");
let started = false;

window.onscroll = function() {
  //  (Skills Section)
  if (window.scrollY >= sectionSkills.offsetTop - 400) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  // (Facts Section)
  if (window.scrollY >= facts.offsetTop - 400) {
    if (!started) {
      nums.forEach((element) => startCount(element));
    }
    started = true;
  }
};

//  startCount
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1500 / goal);
}


// Filter 
let switcherList = document.querySelectorAll(".switcher li");
let divFilter = document.querySelectorAll(".all");
switcherList.forEach((element) => {
  element.addEventListener("click", function removeActive() {
    switcherList.forEach((ele) => {
      ele.classList.remove("active");
      ele.classList.remove("animate__animated", "animate__bounce");
    });
    this.classList.add("active", "animate__animated", "animate__bounce");
  });
  element.addEventListener("click", function addList() {
    divFilter.forEach((item) => {
      item.style.display = "none";
    });
    document.querySelectorAll(this.dataset.switch).forEach((el) => {
      el.style.display = "block";
      el.classList.add("animate__animated", "animate__fadeIn");
    });
  });
});

//  mouse Move 
document.addEventListener("mousemove", function (event) {
  var cursor = document.querySelector(".custom-cursor");
  var cursor2 = document.querySelector(".custom-cursor2");
  cursor.style.left = cursor2.style.left = event.clientX + "px";
  cursor.style.top =cursor2.style.top = event.clientY + "px";
});

// Slider Testimonial
$(document).ready(function () {
  $(".testimonial .indicators li").click(function () {
    var i = $(this).index();
    var targetElement = $(".testimonial .tabs li");
    targetElement.eq(i).addClass("active");
    targetElement.not(targetElement[i]).removeClass("active");
  });
  $(".testimonial .tabs li").click(function () {
    var targetElement = $(".testimonial .tabs li");
    targetElement.addClass("active");
    targetElement.not($(this)).removeClass("active");
  });
});
$(document).ready(function () {
  $(".slider .swiper-pagination span").each(function (i) {
    $(this)
      .text(i + 1)
      .prepend("0");
  });
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

// DarkMood
let bodySection = document.querySelector("body");
let slider = document.querySelectorAll(".slider");
slider.forEach(element => {
  element.addEventListener("click", () => {
    if (bodySection.classList.contains("DarkMood")) {
      bodySection.classList.toggle("DarkMood");
    } else {
      bodySection.classList.toggle("DarkMood");
    }
  });
});
let sun = document.querySelectorAll(".sun");
sun.forEach(element => {
  element.addEventListener("click", () => {
    if (bodySection.classList.contains("DarkMood")) {
      bodySection.classList.toggle("DarkMood");
    } else {
      bodySection.classList.toggle("DarkMood");
    }
  });
});
let moon = document.querySelectorAll(".moon");
moon.forEach(element => {
  element.addEventListener("click", () => {
    if (bodySection.classList.contains("DarkMood")) {
      bodySection.classList.toggle("DarkMood");
    } else {
      bodySection.classList.toggle("DarkMood");
    }
  });
});

// loading
const fadeOut= () => {
    const loaderWrapper = document.querySelector('.loader-wrap');
    loaderWrapper.classList.add('loader-hidden');
}
window.addEventListener('load', fadeOut);
// End Loading

// Up Arrow

const div = document.querySelector(".up");
document.addEventListener("scroll",function () {
    window.scrollY >= 0.5 ? div.classList.add("show") : div.classList.remove("show");
})

div.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
};

//---- start of form validate ------
function formValidate() {
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let error = document.getElementById("error");
    let text = "";

    if (email.indexOf("@") == -1 || email.length < 11) {
      text = "Please Enter Valid Email";
      error.innerHTML = text;
      return false;

    }else if (username.length<8) {
      text = "Please Enter Valid User Name";
      error.innerHTML = text;
      return false;
    }else{
      alert("Thanks for Contact us we will check our E-mail");
    }
  } 
  //---- End of form validate ------
function showTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var day = date.getDate();
  var month = date.getMonth() + 1; // يجب إضافة 1 إلى الشهر لأنه يبدأ من 0
  var year = date.getFullYear();

  if (hours > 12) {
    hours = hours - 12;
  }

  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours < 10 ? "0" + hours : hours;

  var time = hours + ":" + minutes + ":" + seconds;
  var currentDate = day + "/" + month + "/" + year;

  document.getElementById("myClockDisplay").innerHTML =
    time + " - " + currentDate;
  setTimeout(showTime, 1000);
}

showTime();