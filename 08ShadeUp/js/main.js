function randompickerbtn() {
    const randomPicker = document.getElementById('randomPicker');
    const randomValuePara = document.getElementById('randomValuePara');
    let randomColor = "#";
    const hexCode = "ABCDEF0123456789";
    for (let i = 0; i < 6; i++) {
        const randomNum = Math.floor(Math.random() * 16);
        randomColor += hexCode[randomNum];
    }

    randomPicker.style.background = randomColor;
    randomValuePara.innerText = randomColor;

}

function hexFindbtn() {
    const hexInput = document.getElementById('hexInput');
    const colorBox = document.getElementById('color-box');

    colorBox.style.backgroundColor = hexInput.value;
}

function RGBFindbtn() {
    const r = document.getElementById('RInput')
    const g = document.getElementById('GInput')
    const b = document.getElementById('BInput')
    const rgbColorBox = document.getElementById('rgb-color-box');

    rgbColorBox.style.backgroundColor = `rgb(${r.value},${g.value},${b.value})`;

}

function RangeSelector() {
    const r = document.getElementById('RrInput');
    const g = document.getElementById('GrInput');
    const b = document.getElementById('BrInput');
    const colorBox = document.getElementById('range-color-box');

    colorBox.style.backgroundColor = `rgb(${r.value},${g.value},${b.value})`

}

// hex to rgb converter

String.prototype.convertToRGB = function () {

};

function hexConvbtn() {

}

function rgbConvbtn() {

}
