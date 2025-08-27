function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

// heart icon function 
const hearts = document.getElementsByClassName('heart-icon')

for (let heart of hearts) {
    heart.addEventListener('click',
        function () {
            const totalHeart = getElement('heart-count').innerText;
            const currentHeart = Number(totalHeart) + 1;
            getElement('heart-count').innerText = currentHeart;
        })
}

// call btn function 

getElement('card-1').addEventListener('click', function (e) {
    const coin = Number(getElement('total-coin').innerText);
    if (e.target.className.includes('call-btn')) {
        if (coin >= 20) {
            const currentCoin = coin - 20;
            getElement('total-coin').innerText = currentCoin;
            alert('Calling National Emergency 999....');
            const historyContainer = getElement('history-container');
            const createHistory = document.createElement('div')
            createHistory.innerHTML = `
             <div class="bg-[#FAFAFA] rounded-[8px] p-[16px] flex justify-between items-center">
                        <div>
                            <h1 class="font-semibold text-[18px]">Fire Service Number</h1>
                            <h1 class="text-[#5C5C5C] text-[18px]">999</h1>
                        </div>
                        <div>
                            <p>11:36:58 AM</p>
                        </div>
                    </div>
            `
            historyContainer.append(createHistory);
        } else {
            alert('আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ কয়েন লাগবে ।');
        }
    }
});

getElement('clear-btn').addEventListener('click', function () {
    // alert('clear')
    const historyContainer = getElement('history-container');
    historyContainer.innerHTML = '';
})