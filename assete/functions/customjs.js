const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbzt215uo1sI7Uia8lcFs46GgpwzUZ23H3KHSRK3vTBKsP6OU17yhwgfD2E3nKuYcKAb/exec'
const form = document.forms['reservationform']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {alert(" Reservation ")
    form. reset()
  })
    .catch(error => console.error('Error!', error.message))
})

function toggleReadMore() {
  let moreContent = document.getElementById("morecontent");
  let readMoreBtn = document.getElementById("button1");
  if (moreContent.style.display === "none") {
    moreContent.style.display = "inline"; 
    readMoreBtn.innerHTML = "....Read Less";
  } else {
    moreContent.style.display = "none";
    readMoreBtn.innerHTML = "....Read More";
  }
}
function toggleReadMore2() {
  let moreContent = document.getElementById("morecontent2");
  let readMoreBtn = document.getElementById("button2");



  if (moreContent.style.display === "none") {
    moreContent.style.display = "inline"; 
    readMoreBtn.textContent = "....Read Less";
  } else {
    moreContent.style.display = "none";
    readMoreBtn.textContent = "....Read More";
  }
}
function toggleReadMore3() {
  let moreContent = document.getElementById("morecontent3");
  let readMoreBtn = document.getElementById("button3");


  if (moreContent.style.display === "none") {
    moreContent.style.display = "inline"; 
    readMoreBtn.textContent = "....Read Less";
  } else {
    moreContent.style.display = "none";
    readMoreBtn.textContent = "....Read More";
  }
}
function toggleReadMore4() {
  let moreContent4 = document.getElementById("morecontent4");
  let readMoreBtn = document.getElementById("button4");



  if (moreContent4.style.display === "none") {
    moreContent4.style.display = "inline"; 
    readMoreBtn.textContent = "....Read Less";
  } else {
    moreContent4.style.display = "none";
    readMoreBtn.textContent = "....Read More";
  }
}