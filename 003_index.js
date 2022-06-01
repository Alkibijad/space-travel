// main header view swith
let btnNavbar = document.querySelectorAll(".navbar-item");
let sections = document.querySelectorAll(".section");

for (let i = 0; i < btnNavbar.length; i++) {
  btnNavbar[i].addEventListener("click", function () {
    for (let i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }

    let currentSection = document.querySelector(
      "section[data-id=" + this.id + "]"
    );
    currentSection.style.display = "block";
  });
}

//create destination page header

function createDestinationHeader(data) {
  let contentBox = document.querySelector(".destination-content");

  let text = `
  <div class="destination-image"><img id="planet-image" src="${data.destinations[0].images.png}" alt=""></div>
    <div class="destination-details">
      <ul class="destination-list">
        <li id="0">${data.destinations[0].name}</li>
        <li id="1">${data.destinations[1].name}</li>
        <li id="2">${data.destinations[2].name}</li>
        <li id="3">${data.destinations[3].name}</li>
      </ul>
      <div class="display-content">
     
    </div>
 
`;
  contentBox.innerHTML = text;

  let destinationNavbarBTN = document.querySelectorAll(".destination-list li");
  selectDestination(destinationNavbarBTN, data);
}

function selectDestination(destinationNavbarBTN, data) {
  let buttons = destinationNavbarBTN;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      createContent(this.id, data);
    });
  }
}

function createContent(id, data) {
  console.log(data);
  let parentDIV = document.querySelector(".display-content");
  let selectedDestination = document.querySelector(".destination-page-header");
  selectedDestination.innerHTML = `You have selected to visit ${data.destinations[id].name}`;
  let planetImage = document.querySelector("#planet-image");
  planetImage.setAttribute("src", `${data.destinations[id].images.png}`);

  let text = `
  <h2 class="planet-destination-name">${data.destinations[id].name}</h2>
  <p class="planet-destination-text">${data.destinations[id].description}</p>
  <div class="line"></div>
  <div class="distanceAndTime">
      <div class="distance">
        <p>Estimated distance</p>
        <p class="dt">${data.destinations[id].distance}</p>
      </div>
      <div class="time">
        <p>Est. travel time</p>
        <p class="dt">${data.destinations[id].travel}</p>
      </div>
  </div>`;

  parentDIV.innerHTML = text;
}

//crew section

function displayCrew(data) {
  let meetTheCrew = document.querySelector(".meetTheCrew");
 

  let text = `
  <div class="member-details">
  <p class="mycm">
    <span class="num">01 </span
    ><span class="crewMember">MEET YOUR CREW MEMBER</span>
  </p>
  <div class="role">${data.crew[0].role}</div>
  <h2 class="member-name">${data.crew[0].name}</h2>
  <p class="bio">${data.crew[0].bio}</p>
  <div class="circles">
    <div class="circle" id="0"></div>
    <div class="circle" id="1"></div>
    <div class="circle" id="2"></div>
    <div class="circle" id="3"></div>
  </div>
</div>
<div class="member-image">
            <img class="member-img"
              src= "/starter-code/assets/crew/image-douglas-hurley.png"
              alt=""
            />
          </div>
        </div>
`;
  meetTheCrew.innerHTML = text;
  seeOtherCrewMemebers(data);
}

function seeOtherCrewMemebers(data) {
  let circles = document.querySelectorAll(".circle");
  let num = document.querySelector(".num");
  let role = document.querySelector(".role");
  let memberName = document.querySelector(".member-name");
  let bio = document.querySelector(".bio");
  let image = document.querySelector(".member-img");

  for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", function () {
      for (let index = 0; index < circles.length; index++) {
        circles[index].style.backgroundColor = "#5a5b5c";
      }
      circles[this.id].style.backgroundColor = "white";

      num.innerHTML = this.id;
      role.innerHTML = `${data.crew[this.id].role}`;
      memberName.innerHTML = `${data.crew[this.id].name}`;
      bio.innerHTML = `${data.crew[this.id].bio}`;
      image.setAttribute("src", `${data.crew[this.id].images.png}`);
    });
  }
}


