function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
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
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesElement.querySelector(".date").innerHTML =
    losAngelesTime.format("MMMM Do YYYY");
  losAngelesElement.querySelector(".time").innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoElement.querySelector(".date").innerHTML =
    tokyoTime.format("MMMM Do YYYY");
  tokyoElement.querySelector(".time").innerHTML = tokyoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Paris
  let parisElement = document.querySelector("#paris");
  let parisTime = moment().tz("Europe/Paris");
  parisElement.querySelector(".date").innerHTML =
    parisTime.format("MMMM Do YYYY");
  parisElement.querySelector(".time").innerHTML = parisTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

// Update time every second for the static cities
setInterval(updateTime, 1000);

// Add event listener for the city selector dropdown
let citiesSelectElement = document.querySelector("#city-selector");
citiesSelectElement.addEventListener("change", updateCity);
