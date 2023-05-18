// loading
const fadeOut= () => {
    const loaderWrapper = document.querySelector('.loader-wrap');
    loaderWrapper.classList.add('loader-hidden');
}
window.addEventListener('load', fadeOut);
// End Loading-------------------

// Mouse animation function---------------- 
document.addEventListener("mousemove", function (event) {
    var cursor = document.querySelector(".custom-cursor");
    var cursor2 = document.querySelector(".custom-cursor2");
    cursor.style.left = cursor2.style.left = event.clientX + "px";
    cursor.style.top =cursor2.style.top = event.clientY + "px";
  });


//side bar initialization
const navbar = document.querySelector("nav");
document.addEventListener("scroll",function(){
    if (window.scrollY >= .5) {
        navbar.classList.add("navbarSwitch")

    }else {
        navbar.classList.remove("navbarSwitch")
    }
})

//Action of sidebar 
const iconDrop = document.querySelector("#Link");
const dropLinks = document.querySelector(".Links");
iconDrop.addEventListener("click", (eo) => { 
    eo.preventDefault()
    if (iconDrop==="Dotts") {
        iconDrop.classList.toggle("Dotts");
    }
    else if (dropLinks==="UlLinks") {
        dropLinks.classList.toggle("UlLinks");
    }
    else{
        iconDrop.classList.toggle("Dotts");
        dropLinks.classList.toggle("UlLinks");
    }
})
//End DropDown





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


  
// Send email by email js

// function sendEmail(){
//     let user ={
//         username: document.getElementById("username").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//     };
// const serviceId="service_mgrerh7";
// const templateId="template_iyia8oi";

// emailjs.sent(serviceId,templateId,user)
// .then(
//     res=> {
//         document.getElementById("username").value="";
//         document.getElementById("email").value="";
//          document.getElementById("message").value="";
//          console.log(res);
//     }
// )
// .catch((err) => console.log(err));
// } 
// Dark And Light Mode
let bodySection = document.querySelector("body");

let slider = document.querySelectorAll(".slider");

slider.forEach((element) => {
  element.addEventListener("click", () => {
    if (bodySection.classList.contains("DarkMood")) {
      bodySection.classList.toggle("DarkMood");
    } else {
      bodySection.classList.toggle("DarkMood");
    }
  });
});
let sun = document.querySelectorAll(".sun");
sun.forEach((element) => {
  element.addEventListener("click", () => {
    if (bodySection.classList.contains("DarkMood")) {
      bodySection.classList.toggle("DarkMood");
    } else {
      bodySection.classList.toggle("DarkMood");
    }
  });
});
let moon = document.querySelectorAll(".moon");
moon.forEach((element) => {
  element.addEventListener("click", () => {
    if (bodySection.classList.contains("DarkMood")) {
      bodySection.classList.toggle("DarkMood");
    } else {
      bodySection.classList.toggle("DarkMood");
    }
  });
});
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
// Show Time
function showTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var day = date.getDate();
  var month = date.getMonth() + 1;
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
// Search Box
let fillter = document.getElementById("searchBox");
fillter.addEventListener("keyup", function () {
  let Search = this.value.toLowerCase();
  let list = document.querySelectorAll("#ul1 li");

  for (let i of list) {
    let item = i.innerHTML.toLowerCase();
    if (item.indexOf(Search) == -1) i.classList.add("hide");
    else i.classList.remove("hide");
  }
});