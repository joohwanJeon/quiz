import apiService from '../api/apiService'
import API from '../api/api'

export async function setUser(name) {
    return await apiService.toPost(API.SET_USER, {name});
}

export async function updateUser(params) {
    params.id = JSON.parse(localStorage.getItem('userInfo')).id;
    return await apiService.toPost(API.UPDATE_USER, params)
}

export async function getUser() {
    const id = JSON.parse(localStorage.getItem('userInfo')).id;
    return await apiService.toGet(API.GET_USER, {id});
}