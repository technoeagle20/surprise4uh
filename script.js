// 🎂 Birthday Countdown
const birthDate = new Date("2005-06-27T00:00:00"); // ✅ Update DOB here

function updateCountdown() {
  const now = new Date();
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();
  let hours = now.getHours() - birthDate.getHours();
  let minutes = now.getMinutes() - birthDate.getMinutes();
  let seconds = now.getSeconds() - birthDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// 💬 Reply-to-WhatsApp
function submitReply() {
  const message = document.querySelector('.reply-box textarea').value.trim();
  const response = document.getElementById('response');

  if (message === "") {
    response.textContent = "⚠️ Type your message here...";
    return;
  }

  // ✅ Replace with your own number — example: 91 for India + 10-digit number
  const phoneNumber = "918093352201"; // 🔁 REPLACE THIS with your number!

  const encodedMsg = encodeURIComponent("🎉 Birthday Reply:\n" + message);
  const whatsappLink = `https://wa.me/${8093352201}?text=${encodedMsg}`;

  // Open WhatsApp in a new tab
  window.open(whatsappLink, "_blank");

  // Optional confirmation message
  response.textContent = "📲 Redirecting to WhatsApp...";
}
window.addEventListener("click", function () {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play().catch(err => console.log("Music autoplay blocked:", err));
  }
});
