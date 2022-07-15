import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { removeToken, removeId } from '@/utils/auth'
import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Popover } from 'antd';
const content = (
    <div>
        <p>点击退出</p>
    </div>
);
function Main() {
    const navite = useNavigate()
    const [loadings, setLoadings] = useState([]);
    return (<div className="username">
        <Popover content={content}>
            <Button
                type="primary"
                icon={<PoweroffOutlined />}
                loading={loadings[2]}
                onClick={() => logout(navite)}
            />
        </Popover>
    </div>)
}

async function logout(navite) {
    await removeToken()
    await removeId()
    navite('/login')
}

export default Main
