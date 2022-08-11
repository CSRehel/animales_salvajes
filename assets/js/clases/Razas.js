import Animal from "./Animal.js";

class Leon extends Animal{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido)
    }

    Rugir(){
        const nuevo_audio = new Audio('assets/sounds/Rugido.mp3')
        nuevo_audio.play()
    }
}

class Lobo extends Animal{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido)
    }

    Aullar(){
        const nuevo_audio = new Audio('assets/sounds/Aullido.mp3')
        nuevo_audio.play()
    }
}

class Oso extends Animal{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido)
    }

    Gruñir(){
        const nuevo_audio = new Audio('assets/sounds/Gruñido.mp3')
        nuevo_audio.play()
    }
}

class Serpiente extends Animal{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido)
    }

    Sisear(){
        const nuevo_audio = new Audio('/assets/sounds/Siseo.mp3')
        nuevo_audio.play()
    }
}

class Aguila extends Animal{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido)
    }

    Chillar(){
        const nuevo_audio = new Audio('assets/sounds/Chillido.mp3')
        return nuevo_audio.play()
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila }