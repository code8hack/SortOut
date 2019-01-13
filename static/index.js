console.clear();

var tableRow = document.querySelectorAll(".list__row");
var overlay = document.querySelector(".overlay");
var sidebar = document.querySelector(".sidebar");
var closeOverlayBtn = document.querySelector(".button--close");

var sidebarClose = function sidebarClose() {
	sidebar.classList.remove("is-open");
	overlay.style.opacity = 0;
	setTimeout(function () {
		overlay.classList.remove("is-open");
		overlay.style.opacity = 1;
	}, 300);
};

tableRow.forEach(function (tableRow) {
	tableRow.addEventListener("click", function () {
		overlay.style.opacity = 0;
		overlay.classList.add("is-open");
		sidebar.classList.add("is-open");
		setTimeout(function () {
			overlay.style.opacity = 1;
		}, 100);

		// Sidebar content
		var sidebarBody = document.querySelector(".sidebar__body");
		sidebarBody.innerHTML = '';

		var driverPlace = this.querySelector(".list__cell:nth-of-type(1) .list__value").innerHTML;
		var driverName = this.querySelector(".list__cell:nth-of-type(2) .list__value").innerHTML;
		var driverTeam = this.querySelector(".list__cell:nth-of-type(3) .list__value").innerHTML;
		var driverPoints = this.querySelector(".list__cell:nth-of-type(4) .list__value").innerHTML;
		var driverImage = this.dataset.image;
		var driverNationality = this.dataset.nationality;
		var driverDOB = this.dataset.dob;
		var driverCountry = this.dataset.country;

		var newDriver = document.createElement('div');
		newDriver.classList = 'driver';

		var driverContent = document.createElement('div');
		driverContent.classList = 'driver__content';

		var profile = document.createElement('div');
		profile.classList = 'driver__image';
		profile.style.backgroundImage = "url('" + driverImage + "')";
		newDriver.appendChild(profile);

		var driverTitle = document.createElement('div');
		driverTitle.classList = 'driver__title';
		driverTitle.innerHTML = driverName;
		driverContent.appendChild(driverTitle);

		var driverInfo = document.createElement('div');
		driverInfo.innerHTML = "\n\t\t<table class=\"driver__table\">\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><small>Team</small></td>\n\t\t\t\t\t<td>" +




		driverTeam + "</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><small>Nationality</small></td>\n\t\t\t\t\t<td><img src=\"https://www.countryflags.io/" +



		driverCountry + "/shiny/24.png\">" + driverNationality + "</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><small>Date of birth:</small></td>\n\t\t\t\t\t<td>" +



		driverDOB + "</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><small>Place</small></td>\n\t\t\t\t\t<td>" +



		driverPlace + "</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><small>Points</small></td>\n\t\t\t\t\t<td>" +



		driverPoints + "</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>";



		driverContent.appendChild(driverInfo);

		newDriver.appendChild(driverContent);
		sidebarBody.appendChild(newDriver);

	});
});

closeOverlayBtn.addEventListener("click", function () {
	sidebarClose();
});

overlay.addEventListener("click", function () {
	sidebarClose();
});