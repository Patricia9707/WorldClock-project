function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "") return; // Prevent errors if no city is selected

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
            <div>
                <span>${cityName}</span>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">
                ${cityTime.format("h:mm:ss")}
                <small>${cityTime.format("A")}</small>
            </div>
        </div>
    `;
}

// Initialize the clock for existing cities
function updateTime() {
  // Johannesburg
  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgTime = moment().tz("Africa/Johannesburg");
  johannesburgElement.querySelector(".date").innerHTML =
    johannesburgTime.format("MMMM Do YYYY");
  johannesburgElement.querySelector(".time").innerHTML =
    johannesburgTime.format("h:mm:ss A");

  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesElement.querySelector(".date").innerHTML =
    losAngelesTime.format("MMMM Do YYYY");
  losAngelesElement.querySelector(".time").innerHTML =
    losAngelesTime.format("h:mm:ss A");

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoElement.querySelector(".date").innerHTML =
    tokyoTime.format("MMMM Do YYYY");
  tokyoElement.querySelector(".time").innerHTML = tokyoTime.format("h:mm:ss A");

  // Paris
  let parisElement = document.querySelector("#paris");
  let parisTime = moment().tz("Europe/Paris");
  parisElement.querySelector(".date").innerHTML =
    parisTime.format("MMMM Do YYYY");
  parisElement.querySelector(".time").innerHTML = parisTime.format("h:mm:ss A");
}

// Update time every second for the static cities
setInterval(updateTime, 1000);

// Add event listener for the city selector dropdown
let citiesSelectElement = document.querySelector("#city-selector");
citiesSelectElement.addEventListener("change", updateCity);
