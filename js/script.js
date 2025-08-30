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

var icons = document.getElementsByClassName('devicons');
for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener('mouseover', function (event) {
    //console.log(event.target, 'is hovered');
	//console.log(event.target.className.split("-")[1]);
	var specificIcon = event.target.className.split("-")[1];
	document.getElementById(specificIcon).style.visibility = "visible";
  });

  icons[i].addEventListener('mouseout', function (event) {
    //console.log(event.target, 'is gone');
	//console.log(event.target.className.split("-")[1]);
	var specificIcon = event.target.className.split("-")[1];
	document.getElementById(specificIcon).style.visibility = "hidden";
  });
}
