let HTML = {
    name: document.querySelector('.name-from-API'),
    height: document.querySelector('.height-from-API'),
    mass: document.querySelector('.mass-from-API'),
    hair_color: document.querySelector('.hair_color-from-API'),
    skin_color: document.querySelector('.skin_color-from-API'),
    eye_color: document.querySelector('.eye_color-from-API'),
    birth_year: document.querySelector('.birth_year-from-API'), 
    gender: document.querySelector('.gender-from-API'),
};


window.onload = () => {
    checkedButtonCall()
};



function checkedButtonCall() {
    let buttonCall = document.querySelector('.b-button--call');
    if (buttonCall) {
        buttonCall.onclick = () => {
            callToAPI();
        }
    }
};

function callToAPI() {
    try {
        fetch('https://swapi.dev/api/people/1/')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                getInfoToHTML(data);
            });
    }
    catch {
        console.log('ошибка API ответа');
    }
}

function getInfoToHTML(dataFromApi) {
    HTML.name.innerHTML = `Имя: ${dataFromApi?.name ? dataFromApi.name : `Данные не найдены`}`;//вопросительный знак проверка на
    HTML.height.innerHTML = `Рост: ${dataFromApi.height}`;
    HTML.mass.innerHTML = `Вес: ${dataFromApi.mass}`;
    HTML.hair_color.innerHTML = `Цвет волос: ${dataFromApi.hair_color}`;
    HTML.skin_color.innerHTML = `Цвет кожи: ${dataFromApi.skin_color}`;
    HTML.eye_color.innerHTML = `Цвет глаз: ${dataFromApi.eye_color}`;
    HTML.birth_year.innerHTML = `Дата рождения: ${dataFromApi.birth_year}`;
    HTML.gender.innerHTML = `Пол: ${dataFromApi.gender}`;
}