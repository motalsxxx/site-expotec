document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#hdr");
  const rollbackBtn = document.querySelector("#rollback_btn");
  
  // Make the navbar get an box-shadow
  window.addEventListener("scroll", () => {
    if (window.scrollY > 15) {
      header.classList.add("down");
      rollbackBtn.classList.add("visible");
    } else {
      header.classList.remove("down");
      rollbackBtn.classList.remove("visible");
    }
  });
});
