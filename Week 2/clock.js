function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formattedTime24 = `${hours}:${minutes}:${seconds}`;
    const formattedTime12 = `${(hours % 12) || 12}:${minutes}:${seconds} ${ampm}`;

    console.log(`24-hour format: ${formattedTime24}`);
   // console.log(`12-hour format: ${formattedTime12}`);
}

setInterval(updateClock, 1000);
updateClock();
