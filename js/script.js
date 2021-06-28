/**
 * Switch layouts, e.g. replacing #one with #two, by making #one invisible & #two visible.
 * We also hide the scrollbar during the animation.
 * @param {*} current - What is being displayed right now
 * @param {*} next - What we want to display next
 */
function switchSection(current, next) {
	document.documentElement.style.overflow = "hidden";
	document.getElementById(current).style.display = "none";
	document.getElementById(next).style.display = "unset";

	document.getElementById(next).addEventListener("animationend", () => {
		document.documentElement.style.overflow = "auto";
	});
}
