import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://buger-burgers.firebaseio.com/'
});

export default instance;