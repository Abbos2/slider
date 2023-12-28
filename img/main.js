class carusel{
    key
    clas
    constructor (obj) {
        this.key = document.querySelectorAll(obj.el)
        this.clas = this.key.style
        console.log(this.clas)
    }




}

const leftrigt = new carusel({
    el: ".slider-button button"
});