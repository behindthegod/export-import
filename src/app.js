import {getRandomColor} from './utils';

function initApp() {
    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = 'Изменить цвет страницы';
    document.body.append(button);
    button.addEventListener('click', function () {
        let color = getRandomColor();
        console.log(color)
        document.body.style.backgroundColor = color;
    });
}


export default initApp();