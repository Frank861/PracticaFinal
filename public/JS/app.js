/*Scroll sticky*/
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

/*Slide de Imagenes*/

addEventListener('DOMContentLoaded', () =>{
    const Imagenes = ['Imagenes/Foto5.jpg', 'Imagenes/Foto6.jpg', 'Imagenes/Foto7.jpg', 'Imagenes/Foto8.jpg']

    let i = 1
    const img1 = document.querySelector('#img1')
    const img2 = document.querySelector('#img2')
    const progressBar = document.querySelector('#barraslide')
    const divContenedores = document.querySelector('#contenedor')   
    let porcentaje_base = 100/Imagenes.length
    let porcentaje_actual = porcentaje_base

    for (let index = 0; index < Imagenes.length; index++){
        const div = document.createElement('div')
        div.classList.add('circles')
        div.id = index
        divContenedores.appendChild(div)
    }
//Galeria 2
    progressBar.style.width = `${porcentaje_base}$`
    img1.src = Imagenes[0]
    const circulos = document.querySelectorAll('.circles')
    circulos[0].classList.add('resaltado')

    const slideshow =() =>{
        img2.src = Imagenes[i]
        const circulo_actual = Array.from(circulos).find(el => el.id == i)
        Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'))
        circulo_actual.classList.add('resaltado')

        img2.classList.add('active')
        i++
        porcentaje_actual+=porcentaje_base
        progressBar.style.width = `${porcentaje_actual}`
        if (i == Imagenes.length){
            i=0
            porcentaje_actual = porcentaje_base - porcentaje_base
        }

        setTimeout(() => {
            img1.src = img2.src
            img2.classList.remove('active')
        }, 1000)
    }

    setInterval(slideshow, 4000)
})

/*Galeria de fotos*/
document.querySelectorAll('.contenedor-modal .overlay').forEach((el) => {
	el.addEventListener('click', function (ev) {
		ev.stopPropagation();
		this.parentNode.classList.add('active');
	});
});

document.querySelectorAll('.contenedor-modal ').forEach((el) => {
	el.addEventListener('click', function (ev) {
		this.classList.remove('active');
	});
});


// Scroll up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.scrollTo (0, 0);
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}