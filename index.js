document.querySelector('.menu').addEventListener('click', function(e) {
    document.querySelector('#navbar').classList.add('active');
})

document.querySelector('.close').addEventListener('click', function(e) {
    document.querySelector('#navbar').classList.remove('active');
})

