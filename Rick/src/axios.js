import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    timeout: 5000, //Se ajusta a mis necesidadesss
});

export default instance;