document.addEventListener("DOMContentLoaded", () => {
  const doc = document.querySelector("#redirect_to_documentation");
  
  doc.addEventListener("click", () => {
    window.open("https://www.instagram.com/mota.lsx/", "_blank");
  });
});