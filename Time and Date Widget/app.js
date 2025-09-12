let HoursContainer = document.querySelector(".hour");
let MinutesContainer = document.querySelector(".Minutes");
let SecondsContainer = document.querySelector(".Seconds");
let DateContainer = document.querySelector(".date_container");

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
    "January",
    "Febrvary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function formateTime(time) {
    return time < 10 ? "0" + time : time;
}

function UpdateTime() {
    const today = new Date();
    let date = today.getDate();
    let day = days[today.getDay()];
    let month = months[today.getMonth()];

    DateContainer.innerHTML = `<p>${day}</p><p><span>${date}</span></p><p>${month}</p>`;

    let CurrentHour = formateTime(today.getHours());
    let CurrentMinutes = formateTime(today.getMinutes());
    let CurrentSeconds = formateTime(today.getSeconds());

    HoursContainer.textContent = CurrentHour + ":";
    MinutesContainer.textContent = CurrentMinutes + ":";
    SecondsContainer.textContent = CurrentSeconds ;

}

setInterval(UpdateTime, 1000);