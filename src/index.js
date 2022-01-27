let interval = setInterval(update, 1000);

function update() {

    let currentDate = new Date();
    let arrDate = currentDate.toString().split(" ");
    let to = `${arrDate[1]} ${arrDate[2]} ${arrDate[3]} ${arrDate[4]}`;
    let from = "jan 29 2022 00:00:00";
    let diff = new Date(from) - new Date(to);

    if (diff > 0) {
        let days = setTwoDigit(Math.floor(diff / 1000 / 60 / 60 / 24));
        let hours = setTwoDigit(Math.floor(diff / 1000 / 60 / 60) % 24);
        let minutes = setTwoDigit(Math.floor(diff / 1000 / 60) % 60);
        let seconds = setTwoDigit(Math.floor(diff  /1000) % 60);

        document.querySelector("#days").innerText = days + " :";
        document.querySelector("#hours").innerText = hours + " :";
        document.querySelector("#minutes").innerText = minutes + " :";
        document.querySelector("#seconds").innerText = seconds;
    }
    else {
        clearInterval(interval);
    }

}

function setTwoDigit(arg) {
    return arg > 9 ? arg : '0' + arg;
}