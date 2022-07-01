import App from '../App'
import Home from '../views/Home/index'
import Login from '../views/Login/index'
import Error from '../views/Error/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// 定义路由
const BaseRouter = (rou) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default BaseRouter
