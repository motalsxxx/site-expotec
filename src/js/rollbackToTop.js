document.addEventListener("DOMContentLoaded", () => {
  const rollBackBtn = document.querySelector("#rollback_btn");
  
  // Scroll to top when clicking the button
  rollBackBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});