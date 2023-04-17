const API_KEY = "85fc65bc0d6a57724fd9fe9954d320e3";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("you live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.name, data.weather[0].main);
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  })
  .catch(error => {
    console.error(error);

    // 예시) 에러 메시지를 표시하는 알림창을 띄운다.
    alert("오류가 발생했습니다. 다시 시도해주세요.");
  });
}

function onGeoError() {
  alert("can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);