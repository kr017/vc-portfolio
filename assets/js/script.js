'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// research variables
const researchItems = document.querySelectorAll("[bdata-research-item]");
const researchModalContainer = document.querySelector("[bdata-modal-container]");
const reseachModalCloseBtn = document.querySelector("[bdata-modal-close-btn]");
const researchOverlay = document.querySelector("[bdata-overlay]");
const researchItemsDetailed=document.querySelectorAll("[detailed-researchitem]");

// modal variable
const researchModalImg = document.querySelector("[bdata-modal-img]");
const researchModalTitle = document.querySelector("[bdata-modal-title]");
const researchModalText = document.querySelector("[bdata-modal-text]");

// modal toggle function
const researchModalFunc = function () {
  researchModalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < researchItems.length; i++) {
  researchItems[i].addEventListener("click", function () {

    researchModalImg.src = this.querySelector("[data-research-img]").src;
    researchModalImg.alt = this.querySelector("[data-research-img]").alt;
    researchModalTitle.innerHTML = this.querySelector("[bdata-research-title]").innerHTML;
    researchModalText.innerHTML = this.querySelector("[bdata-research-text]").innerHTML;

    researchModalFunc();

  });

}

// add click event to modal close button
reseachModalCloseBtn.addEventListener("click", researchModalFunc);
researchOverlay.addEventListener("click", researchModalFunc);
