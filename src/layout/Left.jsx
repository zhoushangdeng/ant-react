import React from "react";
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    LinkOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { getMenus } from '@/api/menus'


function getItem(label, key, icon, children, type) {
    return { key, icon, children, label, type, };
}

const Left = () => {
    const navite = useNavigate()
    const goRoute = (val) => {
        navite(val)
    }
    const items = [
        getItem('菜单1', '1', <PieChartOutlined />),
        getItem('菜单2', '2', <DesktopOutlined />),
        getItem('菜单3', '3', <ContainerOutlined />),
        getItem('菜单4', 'sub1', <MailOutlined />, [
            getItem(<span onClick={() => goRoute('/login')}> 跳转到登录</span >, '5'),
            getItem(<span onClick={() => goRoute('/home')}>返回首页</span>, '6'),
            getItem('菜单4-3', '7'),
            getItem('菜单4-4', '8'),
        ]),
        getItem('菜单5', 'sub2', <AppstoreOutlined />, [
            getItem('菜单5-1', '9'),
            getItem('菜单5-2', '10'),
            getItem('菜单5-3', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
        ]),
    ];

    return (
        <div style={{ width: 200, }} >
            <Menu
                defaultSelectedKeys={['2']}
                defaultOpenKeys={['sub2']}
                mode="inline"
                theme="dark"
                inlineCollapsed={true}
                items={items}
            />
        </div>
    );
};

export default Left;