const target = 30;
const increment = Math.ceil(target / 100);
const interval = 50;
let current = 0;

const userCountValue = document.querySelector(".userCountValue");
const aboutSection = document.querySelector("#about"); // your section ID

let started = false;

const startCounter = () => {
  if (started) return; // prevent multiple runs
  started = true;

  const updateCount = setInterval(() => {
    current += increment;

    if (current >= target) {
      userCountValue.textContent = target.toLocaleString();
      clearInterval(updateCount);
    } else {
      userCountValue.textContent = current.toLocaleString();
    }
  }, interval);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounter();
      }
    });
  },
  {
    threshold: 0.5, // 50% visible
  },
);

observer.observe(aboutSection);
