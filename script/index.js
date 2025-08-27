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
getElement('card-section-container').addEventListener('click', function (e) {
    const coin = Number(getElement('total-coin').innerText);

    if (e.target.className.includes('call-btn')) {
        const callBtn = e.target;
        console.log(callBtn);
        const localTime = new Date().toLocaleTimeString();
        console.log(localTime);
        // console.log(callBtn);
        const cardTitle = callBtn.parentNode.parentNode.children[1].innerText;
        // console.log(cardTitle)
        const cardNumber = callBtn.parentNode.parentNode.children[3].innerText;
        // console.log(cardNumber);
        if (coin >= 20) {
            const currentCoin = coin - 20;
            getElement('total-coin').innerText = currentCoin;
            alert("Calling"+ cardTitle + cardNumber + "....");
            const historyContainer = getElement('history-container');
            const createHistory = document.createElement('div')
            createHistory.innerHTML = `
              <div class="bg-[#FAFAFA] rounded-[8px] p-[16px] flex justify-between items-center mb-[10px]">
                        <div>
                            <h1 class="font-semibold text-[18px]">${cardTitle}</h1>
                            <h1 class="text-[#5C5C5C] text-[18px]">${cardNumber}</h1>
                        </div>
                        <div>
                            <p>${localTime}</p>
                        </div>
                    </div>
            `
            historyContainer.append(createHistory);
        } else {
            alert("You don't have enough coins, you need at least 20 coins to make a call.");
        }
    }
});

getElement('clear-btn').addEventListener('click', function () {
    // alert('clear')
    const historyContainer = getElement('history-container');
    historyContainer.innerHTML = '';
})


//copy function

getElement('card-section-container').addEventListener('click', function (e) {
    if (e.target.className.includes('copy-btn')) {
        const copyBtn = e.target;
        const cardNumber = copyBtn.parentNode.parentNode.children[3].innerText;
        navigator.clipboard.writeText(cardNumber);
        alert('The number has been copied: ' + cardNumber);
        const copyCount = getElement('copy-count').innerText;
        const totalCopyCount = Number(copyCount) + 1
        getElement('copy-count').innerText = totalCopyCount;

    }
})













