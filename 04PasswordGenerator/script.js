const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    navigator.clipboard.writeText(resultEl.innerText);
    alert("Password Copied.....");
})

generateEl.addEventListener('click', () => {
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, lengthEl.value);
})

function generatePassword(lower, upper, number, symbol, length) {
    let password = "";
    const charTypes = lower + upper + symbol + number;
    if (charTypes == 0) {
        return;
    }

    while (password.length <= length) {
        if (lower) {
            password += randomFunc.lower();
        }
        if (upper) {
            password += randomFunc.upper();
        }
        if (number) {
            password += randomFunc.number();
        }
        if (symbol) {
            password += randomFunc.symbol();
        }
    }
    return password.slice(0, length);
}

function getRandomLower() {
    const lowerChar = "abcdefghijklmnopqrstuvwxyz";
    const randomNum = Math.floor(Math.random() * 26);

    return lowerChar[randomNum];
}

function getRandomUpper() {
    const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomNum = Math.floor(Math.random() * 26);

    return upperChar[randomNum];
}

function getRandomNumber() {
    const nums = "0123456789";
    const randomNum = Math.floor(Math.random() * 10);

    return nums[randomNum];
}

function getRandomSymbol() {
    const symbolsList = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";
    const randomNum = Math.floor(Math.random() * symbolsList.length);

    return symbolsList[randomNum];
}