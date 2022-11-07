const ans = document.getElementById('answer');
const convertBtn = document.querySelector('.btn');
const binaryInput = document.getElementById('binary');
const form = document.querySelector('.container');

convertBtn.addEventListener('click', (event) => {
    ans.innerText = binaryToDecimal(binaryInput.value);
    event.preventDefault();
})

function binaryToDecimal() {
    let num = binaryInput.value;
    let answer = 0;
    let i = 0;
    while (num != 0) {
        let digit = num % 10;
        if (digit == 1) {
            answer = answer + Math.pow(2, i);
        }
        num = num / 10;
        i++;
    }
    return answer;

}