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
