
  function animateValue(id, start, end, duration, suffix = '') {
    const obj = document.getElementById(id);
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      obj.textContent = value + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }

  // Start animations when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    animateValue("successRate", 0, 95, 1500, "%");
    animateValue("clients", 0, 254, 2000, "+");
  });

//what we do section

  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');

    const animateCounter = (counter) => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        counter.innerText = Math.floor(progress * target);
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
          animateCounter(entry.target);
          entry.target.classList.add("counted");
        }
      });
    }, { threshold: 0.6 });

    counters.forEach(counter => {
      observer.observe(counter);
    });
  });

//FAQ SECTION

  