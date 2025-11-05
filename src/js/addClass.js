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

  // Change icon on hover
  const li = document.querySelector("#first_li");
  const icon = document.querySelector("#header_icon");

  li.addEventListener("mouseover", () => {
    icon.classList.add("bi-caret-up-fill");
    icon.classList.remove("bi-caret-down-fill");
  });

  li.addEventListener("mouseout", () => {
    icon.classList.add("bi-caret-down-fill");
    icon.classList.remove("bi-caret-up-fill");
  });
});
