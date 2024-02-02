const menuToggleButton = document.getElementsByClassName(
	"main-navbar__toggle-button"
)[0];
// const navMenu = document
// .getElementsByClassName("main-navbar")[0]
// .getElementsByClassName("row")[0].get;

const navMenu = document.querySelector(".main-navbar .row > div");

menuToggleButton.addEventListener("click", () => {
	navMenu.classList.toggle("show-main-navbar");
});
// console.dir(menuToggleButton);
