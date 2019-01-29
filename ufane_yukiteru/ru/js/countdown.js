// Set the date we're counting down to
var countDownDate = new Date("Sep 1, 2018 10:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(funtion() {

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now an the countdown date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 *60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in elemnt with id="demo"
	document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

	// If the countdown is finished
	if (distance < 0) {
		window.location="character_release.html";
	}
}, 1000);