function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function alertBox() {
    alert("Ati fost adaugat in baza de date.");
}

window.onload = displayClock();
function displayClock() {
	let time = new Date().toLocaleTimeString();

	document.getElementById("clock").innerText = time;
	setTimeout(displayClock, 1000); /* setting timer */
}