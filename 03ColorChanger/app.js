const canvas = document.getElementById('canvas');
const button = document.getElementById('button');

const getRandomColor = () => {
    let randomColor = "#";
    const hexCode = "ABCDEF0123456789";
    for (let i = 0; i < 6; i++) {
        const randomNum = Math.floor(Math.random() * 16);
        randomColor += hexCode[randomNum];
    }
    return randomColor;
}

button.addEventListener('click', () => {
    canvas.style.backgroundColor = getRandomColor();
})

