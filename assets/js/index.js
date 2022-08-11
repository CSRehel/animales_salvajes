import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/Razas.js"

let animales = []

//evento click al botón de registro
document.getElementById('btnRegistrar').addEventListener('click', () => {

    //DOMCache
    let nombre = document.getElementById('animal')
    let edad = document.getElementById('edad')
    let comentario = document.getElementById('comentarios')
    let imgSrc = document.querySelector('#preview img').src

    //instancia
    let nuevoAnimal;

    switch(nombre.value){
        case 'Leon':
            nuevoAnimal = new Leon(nombre.value, edad.value, imgSrc, comentario.value, 'Rugido')
            break;

        case 'Lobo':
            nuevoAnimal = new Lobo(nombre.value, edad.value, imgSrc, comentario.value, 'Aullido')
            break;

        case 'Oso':
            nuevoAnimal = new Oso(nombre.value, edad.value, imgSrc, comentario.value, 'Gruñido')
            break;

        case 'Serpiente':
            nuevoAnimal = new Serpiente(nombre.value, edad.value, imgSrc, comentario.value, 'sisea')
            break;

        case 'Aguila':
            nuevoAnimal = new Aguila(nombre.value, edad.value, imgSrc, comentario.value, 'Chillar')
            break;
    }

    //validación
    if(nombre.value && edad.value && !(comentario.value == '')){

        animales.push(nuevoAnimal)

        //limpiar campos después de hacer un registro
        nombre.selectedIndex = 0
        edad.selectedIndex = 0
        document.querySelector('#preview img').src = ''
        comentario.value = ''

        //mostrar card con info de animal
        reloadTable()

    }else{
        alert('Faltan campos por completar')
    }
})

//card de animales
const reloadTable = () => {

    const animalesTemplate = document.getElementById('Animales')

    animalesTemplate.innerHTML = '';

    animales.forEach((a,i) => {
        animalesTemplate.innerHTML += 
        `<div class="px-3 pb-2">
            <div class="card">
                <img src="${a.getImg()}" class="card-img-top" id="imgAnimales" onclick="infoAnimales(${i})">
                <button class="btn btn-outline-warning" onclick="activarSonido(${i})">Sonido</button>
                </div>
            </div>
        </div>`
    })
}

//botón con sonido
window.activarSonido = (i) => {
    const animal = animales[i]
    switch(animal.getNombre()){
        case 'Leon':
            animal.Rugir()
            break;

        case 'Lobo':
            animal.Aullar()
            break;

        case 'Oso':
            animal.Gruñir()
            break;

        case 'Serpiente':
            animal.Sisear()
            break;

        case 'Aguila':
            animal.Chillar()
            break;
    }
}

//modal de información de cada animal
window.infoAnimales = (i) => {

    const animal = animales[i]
    let modal = document.querySelector('.modal-body')
    $('#exampleModal').modal('toggle');

    modal.innerHTML = ''

    modal.innerHTML += 
    `<div class="px-3 pb-2">
        <div class="card">
            <img src="${animal.getImg()}" class="card-img-top text-center">

            <div class="card-body">
            <h4 class="card-title text-center">${animal.getEdad()}</h4>
            <h4 class="text-center">Comentario</h4>
            <hr class="w-50" mx-auto>
            <p class="card-text text-center">${animal.getComentario()}</p>
            </div>
        </div>
    </div>`

}

