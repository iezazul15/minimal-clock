const html = document.querySelector("html");
const themeToggler = document.getElementById("theme-toggler");
const themeIcon = document.getElementById("theme-icon");
const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");

function toggleTheme() {
  themeToggler.addEventListener("click", () => {
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      themeIcon.classList.replace("fa-sun", "fa-moon");
    } else {
      html.classList.add("dark");
      themeIcon.classList.replace("fa-moon", "fa-sun");
    }
  });
}

// Initialize the theme toggler
toggleTheme();

function showDate() {
  const date = new Date();
  const currentDate = date.toLocaleDateString("bn-BD", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "long",
    day: "2-digit",
    weekday: "long",
  });
  dateEl.textContent = currentDate;
}

function updateTime() {
  const date = new Date();
  let currentTimeEl = date.toLocaleTimeString("bn-BD", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  currentTimeEl = currentTimeEl
    .replace("AM", "পূর্বাহ্ন")
    .replace("PM", "অপরাহ্ন");
  timeEl.textContent = currentTimeEl;
}

showDate();

// instantly show the time
updateTime();

// Update every second
setInterval(updateTime, 1000);
