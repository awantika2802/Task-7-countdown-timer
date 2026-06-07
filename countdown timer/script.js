let countdownInterval;

function startCountdown() {
    const datetimeInput = document.getElementById('datetime');
    const targetDate = new Date(datetimeInput.value).getTime();

    if (isNaN(targetDate)) {
        alert("Invalid date/time. Please enter a valid date and time.");
        return;
    }

    countdownInterval = setInterval(() => {
        const currentDate = new Date().getTime();
        const remainingTime = targetDate - currentDate;

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').textContent = "Countdown complete!";
        } else {
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            document.getElementById('countdown').textContent = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}
console.log("Hello World!");