import Animales from "./consulta.js";

document.getElementById('animal').addEventListener('change', async () => {

    const { animales } = await Animales.getData()

    const animal = document.getElementById('animal').value
    const animalesTemplate = animales.find(anm => anm.name == animal)

    
    document.getElementById('preview').innerHTML = `<img class="img-fluid" src="/assets/imgs/${animalesTemplate.imagen}"/>`
    
    return animalesTemplate
})