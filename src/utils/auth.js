import cookies from "js-cookie";

const TokenKey = 'token'
const roleIdKey = 'roleId'

export function getToken() {
    return cookies.get(TokenKey) || '';
}

export function setToken(token) {
    return cookies.set(TokenKey, token);
}

export function setRoleId(roleId) {
    return cookies.set(roleIdKey, roleId);
}

export function getRoleId() {
    return cookies.get(roleIdKey);
}



export function removeToken() {
    return cookies.remove(TokenKey);
}