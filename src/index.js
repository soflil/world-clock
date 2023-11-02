function timeDateData() {
  let osloDate = moment().tz("Europe/Oslo").format("Do MMMM YYYY");
  let osloTime = moment()
    .tz("Europe/Oslo")
    .format("h:mm:ss [<small>]A[</small>]");

  let osloElement = document.querySelector("#oslo");
  if (osloElement) {
    let osloDateElement = osloElement.querySelector(".date");
    let osloTimeElement = osloElement.querySelector(".time");
    osloDateElement.innerHTML = osloDate;
    osloTimeElement.innerHTML = osloTime;
  }

  let istanbulDate = moment().tz("Europe/Istanbul").format("Do MMMM YYYY");
  let istanbulTime = moment()
    .tz("Europe/Istanbul")
    .format("h:mm:ss [<small>]A[</small>]");

  let istanbulElement = document.querySelector("#istanbul");
  if (istanbulElement) {
    let istanbulDateElement = istanbulElement.querySelector(".date");
    let istanbulTimeElement = istanbulElement.querySelector(".time");
    istanbulDateElement.innerHTML = istanbulDate;
    istanbulTimeElement.innerHTML = istanbulTime;
  }
}

timeDateData();
setInterval(timeDateData, 1000);

function changeCity(event) {
  let citySelected = event.target.value;
  if (citySelected === "current") {
    citySelected = moment.tz.guess();
  }
  let cityTimezone = moment().tz(citySelected);
  let cityName = citySelected.replace("_", " ").split("/")[1];

  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTimezone.format("Do MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTimezone.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
}

let citySelect = document.querySelector("#select-city");
citySelect.addEventListener("change", changeCity);
