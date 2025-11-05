document.addEventListener("DOMContentLoaded", () => {
  const ragnarok = document.querySelector("#redirect_to_ragnarok");
  const aboutus = document.querySelector("#redirect_to_about_us");
  const support = document.querySelector("#redirect_to_support");
  
  ragnarok.addEventListener("click", () => {
    window.scrollTo({
      top: 2550,
      behavior: "smooth"
    });
  });
  
  aboutus.addEventListener("click", () => {
    window.scrollTo({
      top: 2950,
      behavior: "smooth"
    });
  });
  
  support.addEventListener("click", () => {
    window.scrollTo({
      top: 3450,
      behavior: "smooth"
    });
  });
});
