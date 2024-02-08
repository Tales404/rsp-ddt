// accordion script
(function () {
  "use strict";

  const accordions = document.querySelectorAll("[data-accordion]");
  accordions.forEach((header) => {
    const accordionItem = header.parentElement;
    accordionItem.classList.add("active");  
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      accordionItem.classList.toggle("active");
    });
  });
})();
