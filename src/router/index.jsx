import App from '../App'
import Home from '../views/Home/index'
import Login from '../views/Login/index'
import Error from '../views/Error/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
const getRoute = () => {
    const menusTree = useSelector(state => { return state.menusTree })
    console.log("getRoute", menusTree);

    const data = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/home",
            name: "Home"
        },
        {
            path: "/*",
            name: "Error"
        }
    ]

    const modules = import.meta.glob('/*/views/**/index.jsx')
    const home = modules['/src/views/Home/index.jsx']
    console.log(home);
    return (
        <Route path="/" element={<App />}>
            {data.map(item => {
                return (<Route path={item.path} element={<Home />}></Route>)
            })}

        </Route>
    )
}
// 定义路由
const BaseRouter = (rou) => {
    // const data = await getMenus({ roleId: getToken().roleId });
    return (
        <BrowserRouter>
            <Routes>
                {getRoute()}
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default BaseRouter
