const navbar = document.querySelector("nav");
document.addEventListener("scroll", function () {
  if (window.scrollY >= 0.5) {
    navbar.classList.add("navbarSwitch");
  } else {
    navbar.classList.remove("navbarSwitch");
  }
});

//Start DropDown
const iconDrop = document.querySelector("#Link");
const dropLinks = document.querySelector(".Links");
iconDrop.addEventListener("click", (eo) => {
  eo.preventDefault();
  if (iconDrop === "Dotts") {
    iconDrop.classList.toggle("Dotts");
  } else if (dropLinks === "UlLinks") {
    dropLinks.classList.toggle("UlLinks");
  } else {
    iconDrop.classList.toggle("Dotts");
    dropLinks.classList.toggle("UlLinks");
  }
});

// Up Arrow

const div = document.querySelector(".up");
document.addEventListener("scroll", function () {
  window.scrollY >= 0.5
    ? div.classList.add("show")
    : div.classList.remove("show");
});

div.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// loading
const fadeOut = () => {
  const loaderWrapper = document.querySelector(".loader-wrap");
  loaderWrapper.classList.add("loader-hidden");
};
window.addEventListener("load", fadeOut);
// End Loading
// Curser
document.addEventListener("mousemove", function (event) {
  var cursor = document.querySelector(".custom-cursor");
  var cursor2 = document.querySelector(".custom-cursor2");
  cursor.style.left = cursor2.style.left = event.clientX + "px";
  cursor.style.top = cursor2.style.top = event.clientY + "px";
});
// End Curser
// Form Validation
function formValidate() {
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let error = document.getElementById("error");
  let text = "";

  if (email.indexOf("@") == -1 || email.length < 11) {
    text = "Please Enter Valid Email";
    error.innerHTML = text;
    return false;
  } else if (username.length < 8) {
    text = "Please Enter Valid User Name";
    error.innerHTML = text;
    return false;
  } else {
    alert("Thanks for Contact us we will check our E-mail");
  }
}
// End Form Validation
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
// Add Comment
const sendBtn = document.querySelector("#send");
const userName = document.querySelector("#Add_userName");
const comment = document.querySelector("#Add_Comment");
const commentsCont = document.querySelector("#comment-add");

sendBtn.addEventListener("click", sendFeedback);

function sendFeedback(e) {
  const userForm = userName.value;
  const commentForm = comment.value;
  if (userForm && commentForm !== "") {
    newFeedback = {
      id: Math.floor(Math.random() * 1000 + 1),
      userName: userForm,
      comment: commentForm,
    };
    resetForm();
    addFeedback(newFeedback);
  }

  e.preventDefault();
}

function resetForm() {
  userName.value = "";
  comment.value = "";
}

function addFeedback(item) {
  const letter = item.userName.charAt(0);
  const div = document.createElement("div");
  div.classList = "comment_card";
  div.id = item.id;
  div.innerHTML = `
                <div class="spn_l">${letter} </div>
                <div class="content">
                    <h3>
                        <a href="#" class="name">${item.userName} </a> 
                        <a href="#" class="reply">
                            <i class="bi bi-reply-fill"></i>
                            Reply
                        </a>
                    </h3>
                    <p class="date" id="Date">18 may, 2023</p>
                    <p class="comment p">
                            ${item.comment}
                    </p>
                </div>
                
                `;

  commentsCont.insertAdjacentElement("beforeend", div);
}
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
