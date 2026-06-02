const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

elements.forEach((el) => {
  if (el) observer.observe(el);
});