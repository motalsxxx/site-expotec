document.addEventListener("DOMContentLoaded", () => {
  const ragnarok = document.querySelector("#redirect_to_ragnarok");
  const aboutus = document.querySelector("#redirect_to_about_us");
  const support = document.querySelector("#redirect_to_support");
  
  // Scroll to 'Ragnarok' section
  ragnarok.addEventListener("click", () => {
    window.scrollTo({
      top: 2550,
      behavior: "smooth"
    });
  });
  
  // Scroll to 'About Us' section
  aboutus.addEventListener("click", () => {
    window.scrollTo({
      top: 2950,
      behavior: "smooth"
    });
  });
  
  // Scroll to 'Support' section
  support.addEventListener("click", () => {
    window.scrollTo({
      top: 3450,
      behavior: "smooth"
    });
  });
});
