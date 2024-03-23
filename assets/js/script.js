"use strict";

const SectBtns = document.querySelectorAll("li[data_section_btn]");

SectBtns.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    // Remove class from all the btn elements
    SectBtns.forEach((_btn) => {
      _btn.classList.remove("active");
    });

    if (i == 0) window.scrollTo({ top: 0 });
    btn.classList.add("active");
    e.preventDefault();

    const section = btn.getAttribute("data_section_btn");
    const elem = document.querySelector(`[data_section='${section}']`);

    elem.scrollIntoView({
      behavior: "smooth",
    });

    document.querySelector("#menu_res_checkbox").checked = false;
  });
});
