// 1. получить объект модального окна с классом .wrap

let chapter = document.querySelector('.wrap');

// 2. получить тег span, используемый для закрытия окна

let soloSpan = document.querySelector('span');

// 3. получить кнопку, используемую для показа модального окна

let soloButton = document.querySelector('button');

// 4. назначить обработку клика на кнопку показа модального окна
// когда функция обработчик срабатывает она должна у модального
// окна удалять класс hidden

soloButton.addEventListener('click', function(event) {
    chapter.classList.remove('hidden');
})

// 5. назначить обработку клика на тег span, при клике
// в обработчике модальному окну должен быть добавлен
// класс hidden

soloSpan.addEventListener('click', function(event) {
    chapter.classList.add('hidden');
})