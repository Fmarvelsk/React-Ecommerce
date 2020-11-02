import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-ecommerce-62924.cloudfunctions.net/api'
});

export default instance;

/**http://localhost:5001/ecommerce-62924/us-central1/api **/