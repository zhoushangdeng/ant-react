// 创建初始状态，导出
const defaultState = {
    num: 1,
    menus: [],
    menusTree: []
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'FETCH_MENUS':
            newState.menus = action.payload
            break
        case 'FETCH_MENUS_TREE':
            newState.menusTree = action.payload
            break
        default:
            break
    }
    return newState
}