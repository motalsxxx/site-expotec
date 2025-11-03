document.addEventListener("DOMContentLoaded", () => {
  const rollBackBtn = document.querySelector("#rollback_btn");
  
  rollBackBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});