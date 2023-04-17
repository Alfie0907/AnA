const clock = document.querySelector("#clock");

function showClock() {
  const currentTime = getTime();
  const twoDigitTime = setDigit(currentTime);
  clock.innerText = (`${twoDigitTime.twoDigitHour}:${twoDigitTime.twoDigitMinute}:${twoDigitTime.twoDigitSecond}`);
}

function getTime() {
  const date = new Date();
  const hour = String(date.getHours());
  const minute = String(date.getMinutes());
  const second = String(date.getSeconds());
  return {hour, minute, second};
}

function setDigit({hour, minute, second}) {
  const twoDigitHour = hour.padStart(2,"0");
  const twoDigitMinute = minute.padStart(2,"0");
  const twoDigitSecond = second.padStart(2,"0");
  return {twoDigitHour, twoDigitMinute, twoDigitSecond};
}

showClock();
setInterval(showClock, 1000);