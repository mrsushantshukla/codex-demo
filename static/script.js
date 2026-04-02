const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (event) => {
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    if (!name || !email || !message) {
      event.preventDefault();
      alert("Please fill all required fields before submitting.");
    }
  });
}

const revealNodes = document.querySelectorAll("[data-reveal]");

if (revealNodes.length) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${Math.min(index, 6) * 70}ms`;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  revealNodes.forEach((node) => observer.observe(node));
}

const rings = document.querySelector(".bg-rings");

if (rings) {
  window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;
    rings.style.transform = `translate(${x}px, ${y}px)`;
  });
}
