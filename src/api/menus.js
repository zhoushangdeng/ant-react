import request from '@/utils/request';

export function getInfo(params) {
    return request({
        url: '/menu',
        method: 'get',
        params
    })
}

export function getMenus(params) {
    return request({
        url: '/menu',
        method: 'get',
        params
    })
}

export function getMenusTree(params) {
    return request({
        url: '/menu/tree',
        method: 'get',
        params
    })
}

export function insertMenus(data) {
    return request({
        url: '/menu',
        method: 'put',
        data
    })
}

export function delMenus(data) {
    return request({
        url: '/menu',
        method: 'delete',
        data
    })
}

export function updateMenus(data) {
    return request({
        url: '/menu',
        method: 'patch',
        data
    })
}