function getElement(id) {
    const element = document.getElementById(id);
    return element;
}


const hearts = document.getElementsByClassName('heart-icon')

for (let heart of hearts) {
    heart.addEventListener('click',
        function () {
            const totalHeart = getElement('heart-count').innerText;
            const currentHeart = Number(totalHeart) + 1;
            getElement('heart-count').innerText = currentHeart;
        })
}



