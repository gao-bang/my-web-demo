const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const result = document.getElementById('result');

yesButton.addEventListener('click', function () {
    result.style.display = 'block';
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
});

noButton.addEventListener('click', function () {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
});