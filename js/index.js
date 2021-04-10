
// setInterval(runningClock, 1000)
// showSecondsHand()
// showSecondsHand = () => {
//     let secHand = document.createElement('div')
//     let parendDiv = document.querySelector('.clock')

//     parendDiv.appendChild(secHand)
//     secHand.setAttribute('class', 'hand second')
// }
// TIME function configuration
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('.minute')
const currentDate = new Date
const secRatio = currentDate.getSeconds() / 60
const minutesRatio = (secRatio + currentDate.getMinutes()) / 60
const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

hourHand.style.setProperty('--rotation', hoursRatio * 360)
minuteHand.style.setProperty('--rotation', minutesRatio * 360)

// check am pm | default is true which is AM
let am_pm = true

// console.log("Hours: " + hoursRatio * 360)
// console.log("Mins: " + minutesRatio * 360)

console.log(currentDate.getHours())

// ----------------------------

let input_Hours = document.getElementById("hours").nodeValue
let input_Mins = document.getElementById("mins").nodeValue


setHourValue = (HourVal) => {
        hourHand.style.setProperty('--rotation', HourVal * 30)    
}

setMinValue = (MinVal) => {
        minuteHand.style.setProperty('--rotation', (MinVal * 0.1) * 60)
}

// AM PM TOGGLE 

let button_AM = document.querySelector(".am-button")
let button_PM = document.querySelector(".pm-button")

addStyleClass_AM = () => {
    button_AM.classList.add("am-button-selected")
    button_PM.classList.remove("pm-button-selected")
}

addStyleClass_PM = () => {
    button_PM.classList.add("pm-button-selected")
    button_AM.classList.remove("am-button-selected")
}

// Set the current time on page load
setCurrentTime = () => {
    // alert("Hello world")
    document.getElementById("hours").value = currentDate.getHours()
    document.getElementById("mins").value = currentDate.getMinutes()

    if( parseInt(document.getElementById("hours").value) > 12){
        clickPMElement()
        document.getElementById("hours").value = currentDate.getHours() - 12
    }else{
        clickAMElement()
        document.getElementById("hours").value = currentDate.getHours()
    }
}

function clickPMElement(){
    document.querySelector(".pm-button").click()
    }

function clickAMElement(){
    document.querySelector(".am-button").click()
    }
// LImit to numbers only
document.getElementById('hours').addEventListener('keydown', function limitNum(e) {
    var key   = e.keyCode ? e.keyCode : e.which;
    
    if (!( [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
         (key == 65 && ( e.ctrlKey || e.metaKey  ) ) || 
         (key >= 35 && key <= 40) ||
         (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
         (key >= 96 && key <= 105)
       )) e.preventDefault();
});

document.getElementById('mins').addEventListener('keydown', function(e) {
    var key   = e.keyCode ? e.keyCode : e.which;
    
    if (!( [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
         (key == 65 && ( e.ctrlKey || e.metaKey  ) ) || 
         (key >= 35 && key <= 40) ||
         (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
         (key >= 96 && key <= 105)
       )) e.preventDefault();
});


// To allow value within range 

document.getElementById("mins").addEventListener('mouseleave', function() {
    var val = parseInt(this.value);
    if(val > 59 || val < 0)
    {
        alert('Out of range. Input 0 - 59 in minutes')
        this.value = currentDate.getMinutes()
    }
})

document.getElementById("hours").addEventListener('mouseleave', function() {
    var val = parseInt(this.value);
    if(val > 12 || val < 0)
    {
        alert('Out of range. Input 0 - 12 in minutes')
        this.value = currentDate.getHours() - 12;        
    }
})

// toggle am_pm
document.querySelector('.am-button').addEventListener('click', function() {
    am_pm = true
})

document.querySelector('.pm-button').addEventListener('click', function() {
    am_pm = false
})

pass_SetTime = () => {
    let passMins = document.getElementById("mins").value
    let passHours = parseInt(document.getElementById("hours").value)
    if(am_pm == false){
        passHours += 12
    }

    // alert(`${passHours}:${pad(passMins)}:${am_pm}` )
    return passHours+":"+passMins
}

// Turn 1 to 01 or two digits
function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

testFunction = () => {
    alert(pass_SetTime()) 
}


// function runningClock() {


//     const hourHand = document.querySelector('[data-hour-hand]')
//     const minuteHand = document.querySelector('.minute')
//     const secondHand = document.querySelector('.second')

//     const currentDate = new Date
//     const secRatio = currentDate.getSeconds() / 60
//     const minutesRatio = (secRatio + currentDate.getMinutes()) / 60
//     const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

//     setRotation(secondHand, secRatio)
//     setRotation(minuteHand, minutesRatio)
//     setRotation(hourHand, hoursRatio)
//     showSecondsHand()
// }

// function setRotation(element, rotationRatio) {
//     element.style.setProperty('--rotation', rotationRatio * 360)
// }