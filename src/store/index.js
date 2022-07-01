import reducer from "./reducer";

// 创建仓库
import { legacy_createStore as createStore } from 'redux'

const store = createStore(reducer)

export default store