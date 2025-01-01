function activeButton(id) {
    document.getElementById('btn-donate').classList.remove('bg-lime-400');
    document.getElementById('btn-history').classList.remove('bg-lime-400');

    document.getElementById(id).classList.add('bg-lime-400');
}


function donateAmount(id, totalDonation, title) {
    const donationAmount = document.getElementById(id).value;
    const donationAmountNumber = parseFloat(donationAmount);
    const accountBalance = document.getElementById('account-balance').innerText;
    const accountBalanceNumber = parseFloat(accountBalance);
    const addedBalance = document.getElementById(totalDonation).innerText;
    const addedBalanceNumber = parseFloat(addedBalance);
    if (!isNaN(donationAmountNumber) && donationAmountNumber <= accountBalanceNumber && donationAmountNumber > 0) {
        // Arithmetic Logic 
        const newAccountBalance = accountBalanceNumber - donationAmountNumber;
        document.getElementById('account-balance').innerText = newAccountBalance;
        const newAddedBalance = donationAmountNumber + addedBalanceNumber;
        document.getElementById(totalDonation).innerText = newAddedBalance;

        // modal 
        document.getElementById('open-modal').classList.remove('hidden')
        document.getElementById('close-modal-btn').addEventListener('click', function () {
            document.getElementById('open-modal').classList.add('hidden');
        })

        // history 

        const historyTitle = document.getElementById(title).innerText;
        const currentTime = new Date().toString();;
        const historyCard = document.getElementById('history-card');

        const historyContent = document.createElement("div");
        historyContent.classList.add("w-3/4", "mx-auto", "p-8", "flex", "gap-y-5", "flex-col", "border", "rounded-lg", "mb-6");
        historyContent.innerHTML = `
                <h1 class="text-xl font-bold">${donationAmountNumber} Taka is ${historyTitle}
                </h1>
                <p class="text-sm font-[300px]">Date: ${currentTime}
                </p>
        `
        historyCard.appendChild(historyContent)

    }
    else if (donationAmountNumber > accountBalanceNumber) {
        alert('Insufficient Balance')
    }
    else {
        alert('Please Provide Amount')
    }
}