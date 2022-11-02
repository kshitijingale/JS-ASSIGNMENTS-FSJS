const jokeDiv = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();

    jokeDiv.innerText = await data.value;
})
