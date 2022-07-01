import React from "react";
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom'
import Menu from './Left'
import Top from './Top'
import './index.css'
const { Header, Sider, Content } = Layout;

function Main() {
    return (<Layout>
        <Sider><Menu></Menu></Sider>
        <Layout>
            <Header style={{ background: 'white' }}><Top></Top></Header>
            <Content class="content"><Outlet></Outlet></Content>
        </Layout>
    </Layout>)
}

export default Main
