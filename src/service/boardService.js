import apiService from '../api/apiService'
import API from '../api/api'

let boards = [];
let cnt = 0;

export async function getBoardList(init, all) {
    if(all) {
        return boards;
    }
    
    if(init) {
        cnt = 0;
        boards =  await apiService.toGet(API.GET_BOARD_LIST);
    } else {
        cnt++;
    }

    return boards.slice(0, 3*(cnt+1));
}

export async function getBoard(id) {
    return await apiService.toGet(API.GET_BOARD, {id});
}

export async function updateBoard(id) {
    const params = {
        id,
        checked: true
    }
    return await apiService.toPost(API.UPDATE_BOARD, params);
}