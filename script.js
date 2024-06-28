const display = document.querySelector(".answer");
const solve = document.querySelector(".equl");
const clearAll = document.querySelector(".clear");
const btns = document.querySelectorAll(".btn");

btns.forEach((buttons) => {
	buttons.addEventListener("click", function () {
		display.value += buttons.value;
	});
});

clearAll.addEventListener("click", () => {
	display.value = "";
});

solve.addEventListener("click", () => {
	const result = eval(display.value);
	display.value = result;
});
