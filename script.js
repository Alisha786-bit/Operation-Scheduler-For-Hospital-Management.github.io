let slide = document.querySelectorAll(".patientReview");
let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("closeBtn");
let connectBtn = document.getElementById("connectBtn");


let count = 0;

slide.forEach(function(slides, index) {
  slides.style.left = `${index * 100}%`;
});

function myFun() {
  slide.forEach(function(curVal) {
    curVal.style.transform = `translateX(-${count * 100}%)`;
  });
}

setInterval(function() {
  count++;
  if (count == slide.length) {
    count = 0;
  }
  myFun();
}, 2000);

card.forEach(function(card) {
    card.addEventListener("click", function() {
        console.log(card);
        document.querySelector(".detail").style.display="block"
        document.querySelector(".content").innerHTML = `
            <img src=${card.firstElementChild.src} alt="">
            <div class="contentText">
                <h1>Alexa Zoan</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error officia at, perferendis, minus totam tempora magnam fugiat temporibus nulla dignissimos architecto laboriosam!</p>
            </div>
        `;
        closeBtn.addEventListener("click", function(){
            document.querySelector(".detail").style.display="none"
        });
    });
});


connectBtn.addEventListener("click", function() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  if (email === "" || pass === "") {
      alert("Enter Details");
  } else {
      alert("You Logged In");
  }
});


