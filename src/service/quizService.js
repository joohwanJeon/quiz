import apiService from '../api/apiService'
import API from '../api/api'

export async function searchData(keyword='') {
    const params = {
        name: keyword.includes('or') ? keyword : `'${keyword}'`
    }
    const user = await apiService.toGet(API.GET_DATA, params);
    return user;
}

export async function getMyData() {
    return await apiService.toGet(API.GET_DATA, {name: '"김희진"'});
}

export function checkClear(a,b,c) {
    const quizes = [a,b,c];
    return quizes.every(v => v === 999);

}