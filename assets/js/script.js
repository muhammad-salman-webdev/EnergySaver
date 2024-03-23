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

// --------

const galleryBtns = document.querySelectorAll(
  "button.filter-button[data-filter]"
);
const galleryImges = document.querySelectorAll("div.gallery_product");

galleryBtns.forEach((_btn, _i) => {
  _btn.addEventListener("click", (e) => {
    galleryBtns.forEach((__btn) => __btn.classList.remove("_active"));
    _btn.classList.add("_active");
    if (_i == 0) {
      galleryImges.forEach((_img, i) => {
        if (i > 5) _img.classList.add("cd-none");
      });
    } else {
      galleryImges.forEach((_img, _i) => {
        _img.classList.remove("cd-none");
      });
    }
  });

  if (_i == 0) _btn.click();
});
