const countDown = () => {
    const countDate = new Date("January 12, 2023 00:00:00").getTime();
    const presentDate = new Date().getTime();
    const Difference = countDate - presentDate;


    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const remDay = Math.floor(Difference / day);
    const remHour = Math.floor((Difference % day) / hour);
    const remMinute = Math.floor((Difference % hour) / minute);
    const remSecond = Math.floor((Difference % minute) / second);

    document.querySelector('.day').innerText = remDay;
    document.querySelector('.hour').innerText = remHour;
    document.querySelector('.minutes').innerText = remMinute;
    document.querySelector('.seconds').innerText = remSecond;

}

setInterval(countDown, 1000)