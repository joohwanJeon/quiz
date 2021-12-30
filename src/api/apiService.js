import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8084/',
    timeout: 3000
});

function toRequest(method, url, params, errorAlert){
    let config = {method, url }
    if(method === 'GET') {
        config.params = params
    } else {
        config.data = params
    }
    return instance(config)
            .then(res => successHandler(res.data, errorAlert))
            .catch(res => errorHandler(res.response, errorAlert));
}

function successHandler(response) {
    return Promise.resolve(response.data);
}

function errorHandler(response) {
    if(response.status === 400) {
        return Promise.resolve([]);
    }
    return Promise.reject(response);
}


function toGet(url, params, errorAlert) {
    return toRequest('GET', url, params, errorAlert);
}

function toPost(url, params, errorAlert) {
    return toRequest('POST', url, params, errorAlert);
}

export default {toGet, toPost}
