import request from '@/utils/request';

export function getBook(params) {
    return request({
        url: '/book',
        method: 'get',
        params
    })
}

