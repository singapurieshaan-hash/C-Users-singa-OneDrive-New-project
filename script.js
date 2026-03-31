const timeElement = document.getElementById("la-time");

function updateLosAngelesTime() {
  if (!timeElement) {
    return;
  }

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const formatted = formatter.format(new Date()).replace(/\s/g, "").toLowerCase();
  timeElement.textContent = formatted;
}

updateLosAngelesTime();
setInterval(updateLosAngelesTime, 1000);
