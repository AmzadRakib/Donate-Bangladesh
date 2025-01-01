document.getElementById('btn-donate').addEventListener('click', function () {
    activeButton('btn-donate')
    document.getElementById('donation-card').classList.remove('hidden')
    document.getElementById('history-card').classList.add('hidden')
})
document.getElementById('btn-history').addEventListener('click', function () {
    activeButton('btn-history')
    document.getElementById('donation-card').classList.add('hidden')
    document.getElementById('history-card').classList.remove('hidden')
})


document.getElementById('btn-noakhali').addEventListener('click', function () {
    donateAmount('input-noakhali', 'card-1-total', 'noakhali-title');
})

document.getElementById('btn-feni').addEventListener('click', function () {

    donateAmount('input-feni', 'card-2-total', 'feni-title')
});

document.getElementById('btn-quota').addEventListener('click', function () {
    donateAmount('input-quota', 'card-3-total', 'quota-title')
})
