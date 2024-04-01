document.addEventListener("DOMContentLoaded", function() {
    let intervalID;

    function getClock(){
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
        let second = new Date().getSeconds();

        hour = (hour < 10) ? '0' + hour : hour;
        minute = (minute < 10) ? '0' + minute : minute;
        second = (second < 10) ? '0' + second : second;

        document.getElementById('hour').innerHTML =  hour;
        document.getElementById('minute').innerHTML = minute;
        document.getElementById('second').innerHTML = second;
    }

    intervalID = setInterval(getClock, 1000);

    setTimeout(function() {
        clearInterval(intervalID);
    }, 10000);
});
