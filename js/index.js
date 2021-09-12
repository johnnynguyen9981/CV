// Home Page

// Logo Hover Effect
$("img.logo").hover(function() {
  $(this).addClass("logoHover");
}, function() {
  $(this).removeClass("logoHover");
});

// IconicWhite Hover Effect
$("img.iconicWhite").hover(function() {
  $(this).addClass("iconicWhiteHover");
}, function() {
  $(this).removeClass("iconicWhiteHover");
});

// Avatar Hover Effect
$("img.avatar").hover(function() {
  $(this).addClass("avatarHover");
}, function() {
  $(this).removeClass("avatarHover");
});

// Movement for the animation to happen


//Moving Animation Event

const card = document.querySelector(".aCard");
const container = document.querySelector(".aContainer");

// items

const title = document.querySelector(".aTitle");
const logo = document.querySelector(".aLogo");
const subtitle = document.querySelector(".aSubtitle");
const button = document.querySelector(".aButton");

// Moving element event
container.addEventListener("mousemove", (e) =>{
  let yAxis = (window.innerWidth/2  - e.pageY) / 30;
  let xAxis = (window.innerHeight/2  - e.pageX) / 30;
  card.style.transform = `rotateX(${-yAxis}deg) rotateY(${-xAxis}deg) `;
});

//Animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  // popout
  logo.style.transform = "translateZ(100px)";
  title.style.transform = "translateZ(100px)";
  subtitle.style.transform = "translateZ(100px)";
});



//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  // popback
  title.style.transform = "translateZ(0px)";
  logo.style.transform = "translateZ(0px)";
});
