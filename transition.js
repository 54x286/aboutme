// transition.js

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
  
    const links = document.querySelectorAll("a[href]");
    links.forEach(link => {
      if (link.hostname === window.location.hostname && !link.target) {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const href = this.getAttribute("href");
  
          document.body.classList.remove("fade-in");
          document.body.classList.add("fade-out");
  
          setTimeout(() => {
            window.location.href = href;
          }, 300); // match the fade duration
        });
      }
    });
  });
  
