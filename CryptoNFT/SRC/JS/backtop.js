window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.scroll-up');
    scroll.classList.toggle("active", window.scrollY > 1000)
})

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}