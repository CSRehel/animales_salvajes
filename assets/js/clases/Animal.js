class Animal{
    constructor(nombre, edad, img, comentario, sonido){
        let Nombre = nombre
        let Edad = edad
        let Img = img
        let Comentario = comentario
        let Sonido = sonido

        this.getNombre = () => Nombre
        this.getEdad = () => Edad
        this.getImg = () => Img
        this.getComentario = () => Comentario
        this.getSonido = () => Sonido

        this.setComentario = (comentario) => (Comentario = comentario);
    }

    get Nombre(){
        return this.getNombre()
    }

    get Edad(){
        return this.getEdad()
    }

    get Img(){
        return this.getImg()
    }

    get Comentario(){
        return this.getComentario()
    }
    
    get Sonido(){
        return this.getSonido()
    }
    
    set Comentario(comentario){
        return this.getComentario(comentario)
    }
    
}

export default Animal;