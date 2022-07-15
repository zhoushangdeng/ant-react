import { getRoleId } from '@/utils/auth'
import { getMenus, getMenusTree } from '@/api/menus'

export function fetchMenus() {
    return (dispath) => {
        dispath({ type: "FETCH_MENUS", payload: [] })
        getMenus({ roleId: getRoleId() }).then(res => {
            dispath({ type: "FETCH_MENUS", payload: res })
        })
    }
}

export function fetchMenusTree() {
    return (dispath) => {
        dispath({ type: "FETCH_MENUS_TREE", payload: [] })
        getMenusTree({ roleId: getRoleId() }).then(res => {
            dispath({ type: "FETCH_MENUS_TREE", payload: res })
        })
    }
}

export default { fetchMenus }