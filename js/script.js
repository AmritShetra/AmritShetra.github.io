/**
 * Switch layouts, e.g. replacing #one with #two by making #one invisible & #two visible.
 * @param {*} current - What is being displayed right now
 * @param {*} next - What we want to display next
 */
function switchSection(current, next) {
    document.getElementById(current).style.display = 'none';
    document.getElementById(next).style.display = 'unset';
}
