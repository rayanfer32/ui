const speedElm = document.querySelector("#speed");
const filesizeElm = document.querySelector("#filesize");
const calculateBtnElm = document.querySelector("#calculateBtn");
const resultElm = document.querySelector("#result");
const speedBtnsElm = document.querySelector("#speed-btns")
const filesizeBtnsElm = document.querySelector("#filesize-btns")

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return hours + ':' + minutes + ':' + seconds;
}

function calculateTime() {
    let res = filesizeElm.value * 1024 / (speedElm.value / 8);
    resultElm.innerText = res.toString().toHHMMSS()
}

speedBtnsElm.addEventListener("click", e => {
    let targetValue = e.target.value;
    if (!isNaN(targetValue)) {
        speedElm.value = targetValue;
        calculateTime()
    }
})

filesizeBtnsElm.addEventListener("click", e => {
    let targetValue = e.target.value;
    if (!isNaN(targetValue)) {
        filesizeElm.value = targetValue;
        calculateTime()
    }
})


//attach event listners for changes in the input and autocalculate the result
speedElm.addEventListener("input", calculateTime)
filesizeElm.addEventListener("input", calculateTime)

calculateBtnElm.addEventListener("click", calculateTime);
calculateTime();
// const autoCalcInterval = setInterval(calculateTime, 1000);