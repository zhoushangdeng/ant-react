import React, { useEffect } from "react";
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMenus, fetchMenusTree } from '@/store/action'
import { isEmpty } from 'lodash'
function getItem(label, key, icon, children, type) {
    return { key, icon, children, label, type, };
}

const initMenu = (menus) => {
    const menusTree = []
    for (let i = 0; i < menus.length; i++) {
        const { title, id, children } = menus[i]
        menusTree.push(getItem(title, id, <PieChartOutlined />, children.length > 0 ? initMenu(children) : ''))
    }
    return menusTree
}

const Left = () => {
    const navite = useNavigate()
    const dispatch = useDispatch()
    const menusTree = useSelector(state => { return state.menusTree })
    const menus = useSelector(state => { return state.menus })
    // 如果menusTree不存在则请求后端获取
    useEffect(() => {
        isEmpty(menusTree) ? dispatch(fetchMenusTree()) : ""
        isEmpty(menus) ? dispatch(fetchMenus()) : ""
    }, []);
    const goRoute = (val) => { navite(val) }
    const menusTree_ = initMenu(menusTree)

    return (
        <div style={{ width: 200 }} >
            <Menu
                defaultSelectedKeys={['2']}
                defaultOpenKeys={['sub2']}
                mode="inline"
                theme="dark"
                items={menusTree_}
            />
        </div>
    );
};

export default Left;