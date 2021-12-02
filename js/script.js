function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {

    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const digit = document.getElementById('given-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            digit.value = '';
        }
    }
    else {
        const previousDigit = digit.value;
        const newDigit = previousDigit + number;
        digit.value = newDigit;
    }

});

function comparePin() {
    const pin = document.getElementById('display-pin').value;
    const givenPin = document.getElementById('given-numbers').value;
    const verifyPass = document.getElementById('verify-pass');
    const verifyFail = document.getElementById('verify-fail');
    if (pin == givenPin) {
        verifyPass.style.display = 'block';
        verifyFail.style.display = 'none';
    }
    else {
        verifyFail.style.display = 'block';
        verifyPass.style.display = 'none';
    }

};