
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'antd';
import './index.css'
import { getRoleId } from '@/utils/auth'
import { getMenus } from '@/api/menus'

function Home() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const result = await getMenus({ roleId: getRoleId() })
            const data = result.map(({ title, id, path }) => {
                return { key: id, name: title, age: id, address: path }
            })
            setData(data);
            setIsLoading(false);
        }
        fetchData();
    }, []);

    const columns = [
        { title: '菜单名称', dataIndex: 'name', key: 'name', },
        { title: 'id', dataIndex: 'age', key: 'age', },
        { title: '路径', dataIndex: 'address', key: 'address', }
    ];

    return (<div>{isLoading ? <span>isLoading...</span> : <Table dataSource={data} columns={columns} />}</div>)
}

export default Home
