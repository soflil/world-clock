function timeDateData() {
  let osloDate = moment().tz("Europe/Oslo").format("Do MMMM YYYY");
  let osloTime = moment()
    .tz("Europe/Oslo")
    .format("h:mm:ss [<small>]A[</small>]");

  let osloElement = document.querySelector("#oslo");
  let osloDateElement = osloElement.querySelector(".date");
  let osloTimeElement = osloElement.querySelector(".time");
  osloDateElement.innerHTML = osloDate;
  osloTimeElement.innerHTML = osloTime;

  let istanbulDate = moment().tz("Europe/Istanbul").format("Do MMMM YYYY");
  let istanbulTime = moment()
    .tz("Europe/Istanbul")
    .format("h:mm:ss [<small>]A[</small>]");

  let istanbulElement = document.querySelector("#istanbul");
  let istanbulDateElement = istanbulElement.querySelector(".date");
  let istanbulTimeElement = istanbulElement.querySelector(".time");
  istanbulDateElement.innerHTML = istanbulDate;
  istanbulTimeElement.innerHTML = istanbulTime;
}

timeDateData();
setInterval(timeDateData, 1000);
