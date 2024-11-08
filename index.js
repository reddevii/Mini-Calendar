const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");
const clockEl = document.getElementById("clock");

const date = new Date();
monthNameEl.innerText = date.toLocaleDateString("en", { month: "long" });
dayNameEl.innerText = date.toLocaleDateString("en", { weekday: "long" });
dayNumEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockEl.innerText = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);
