const inputText = document.getElementById('input');
const submitBtn = document.getElementById('submit');
const img = document.getElementById('img');
const main = document.getElementById('main');

submitBtn.addEventListener('click', async () => {
    if (inputText.value == "") {
        img.style.display = 'none';
        main.style.height = '300px';
        return;
    }

    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText.value}`;
    img.style.display = 'block';
    main.style.height = '550px';

})
