const convertBtn = document.getElementById('convert-btn');

const getCamelCase = (str) => {
    let ans = str.toLowerCase();

    return ans.split(" ").reduce((pV, cV) => {
        return pV + (cV.charAt(0).toUpperCase() + cV.slice(1));
    })
}

const getPascalCase = (str) => {
    let ans = str.toLowerCase();
    let pascal = "";
    ans.split(" ").map((e) => {
        pascal += e.charAt(0).toUpperCase() + e.slice(1);
    })

    return pascal;
}

const getSnakeCase = (str) => {
    const strArr = str.toLowerCase().split(' ');
    return strArr.join('_');
};

const getScreamingSnakeCase = (str) => {
    const strArr = str.toUpperCase().split(' ');
    return strArr.join('_');
};

const getKebabCase = (str) => {
    const strArr = str.toLowerCase().split(' ');
    return strArr.join('-');
};

const getScreamingKebabCase = (str) => {
    const strArr = str.toUpperCase().split(' ');
    return strArr.join('-');
};

convertBtn.addEventListener('click', () => {
    const text = document.getElementById('text').value;

    // Camel Case
    const pCamel = document.getElementById('camel-case');
    pCamel.innerText = getCamelCase(text);

    // Pascal Case
    const pPascal = document.getElementById('pascal-case');
    pPascal.innerText = getPascalCase(text);

    // Snake Case
    const pSnake = document.getElementById('snake-case');
    pSnake.innerText = getSnakeCase(text);

    // Screaming Snake Case
    const pScreamingSnake = document.getElementById('screaming-snake-case');
    pScreamingSnake.innerText = getScreamingSnakeCase(text);

    // Kebab Case
    const pKebab = document.getElementById('kebab-case');
    pKebab.innerText = getKebabCase(text);

    // Screaming Kebab Case
    const pScreamingKebab = document.getElementById('screaming-kebab-case');
    pScreamingKebab.innerText = getScreamingKebabCase(text);


})

