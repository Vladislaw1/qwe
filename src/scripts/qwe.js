const btnCorzina = document.querySelector('.card__button');

btnCorzina.addEventListener('click', onChangeText);

export function onChangeText(e){
    btnCorzina.textContent = "Добавлено в корзину";
    btnCorzina.style.color = "green";
 }