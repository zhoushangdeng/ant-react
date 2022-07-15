
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Input, Space, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import cookies from "js-cookie";
import { login } from '@/api/login'
import { setToken, setRoleId } from '@/utils/auth'
import './index.css'
import { useDispatch } from 'react-redux'
import { fetchMenus, fetchMenusTree } from '../../store/action'

const token = cookies.get("token");
function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navite = useNavigate()
    const dispatch = useDispatch()

    return (
        token ? <Navigate to="/"></Navigate> :
            <div className='login'>
                <div className='login_'>
                    <Input size="large" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="user" prefix={<UserOutlined />} />
                    <br></br><br></br>
                    <Space direction="vertical">
                        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} size="large" placeholder="password" />
                    </Space>
                    <br></br><br></br>
                    <Button size="large" type="primary" block onClick={() => userLogin(username, password, navite, props.loginSuccess, dispatch)}> Login </Button>
                </div>
            </div>
    )
}

const userLogin = (username, password, navite, loginSuccess, dispatch) => {
    return login({ username, password }).then(async ({ data, code }) => {
        if (200 == code) {
            await setToken(data.token)
            await setRoleId(data.roleId)
            dispatch(fetchMenus())
            dispatch(fetchMenusTree())
            navite('/home')
        } else {
            alert('error')
        }
    })
}

export default Login
