const sliderimageitem = [...document.querySelectorAll('.slider-image__item')]
const btnprev = document.querySelector('.btn-prev')
const btnnext = document.querySelector('.btn-next')
const slider = document.querySelector('.slider')

let i = 0

btnnext.addEventListener('click',function () {
    sliderimageitem[i].style.display = 'none'
    i++

    if (i >= sliderimageitem.length) {
        i = 0
    }
    sliderimageitem[i].style.display = 'block'
})
btnprev.addEventListener('click',function () {
    sliderimageitem[i].style.display = 'none'
    i--
    if (i < 0) {
        i = sliderimageitem.length - 1
    }
    sliderimageitem[i].style.display = 'block'
})

function nextslider() {
    sliderimageitem[i].style.display = 'none'
    i++

    if (i >= sliderimageitem.length) {
        i = 0
    }
    sliderimageitem[i].style.display = 'block'
}

let stopFunc = setInterval(nextslider,500)

function stop() {
    clearInterval(stopFunc)
}

function start() {
    return stopFunc =setInterval(nextslider,500)
}

slider.addEventListener('mouseover',function () {
    stop()
})
slider.addEventListener('mouseout',function () {
    start()
})