const section = document.getElementById("animation-right");

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      // Add your animation logic here
      section.classList.add("animate");
    }
  },
  { threshold: 0.5 } // Adjust as needed
);

observer.observe(section);

const section1 = document.getElementById("animation-left");

const observer1 = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      // Add your animation logic here
      section1.classList.add("animate");
    }
  },
  { threshold: 0.5 } // Adjust as needed
);

observer1.observe(section);
