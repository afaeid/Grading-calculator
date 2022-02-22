let outputScreen = document.getElementById("result");
let inPut = document.getElementById("input");
let button = document.getElementById("button");
function checkResult(){
   
    if (inPut.value >= 80 && inPut.value <= 100) {
      outputScreen.innerHTML = 'Wow! You got an ' + "<b>" + 'A+'+ "</b>";
    }
    if (inPut.value >=70 && inPut.value <80) {
      outputScreen.innerHTML = 'You got an ' + "<b>" + 'A' + "</b>"
    }
    if (inPut.value >= 60 && inPut.value < 70) {
      outputScreen.innerHTML = 'You got an ' + "<b>" + 'A-' + "</b>"
    }
    if (inPut.value >= 40 && inPut.value < 60) {
      outputScreen.innerHTML = 'You got a ' + "<b>" + 'D' + "</b>"
    }
    if (inPut.value > 30 && inPut.value < 40 ) {
      outputScreen.innerHTML = 'Ohh! shut. You are ' + "<b>" + 'fail ' + "</b>" + 'for a few number😔'
    }
    if (inPut.value > 10 && inPut.value <= 30) {
      outputScreen.innerHTML = 'Ohh no! You are ' + "<b>" + 'fail' + "</b>";
    }
    if (inPut.value > 0 && inPut.value <= 10) {
      outputScreen.innerHTML = 'You are a great govet! You are ' + "<b>" + 'fail.' + "</b>"
    }
    if (inPut.value == '') {
      alert("Insert a number at first.")
    }
    if (inPut.value > 100) {
      alert("Do you know, you are a froat!")
    }
}
