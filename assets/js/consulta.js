let Animales = ( () => {

    //url base
    const url = 'http://127.0.0.1:5500/animales.json';

    //función asíncrona que trae la data
    const getData = async () => {
        const res = await fetch(url)
        const data = res.json()
        return data
    };

    return {getData};
})()

export default Animales;
