const target = 30;
const increment = Math.ceil(30 / 100);
const interval = 50;
let current = 0;
const userCountValue = document.querySelector(".userCountValue");

const updateCount = setInterval(() => {
  current += increment;
  if (current >= target) {
    userCountValue.textContent = target.toLocaleString();
    clearInterval(updateCount);
  } else {
    userCountValue.textContent = current.toLocaleString();
  }
}, interval);
