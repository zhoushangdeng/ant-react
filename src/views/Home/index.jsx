
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
                return {
                    key: id,
                    name: title,
                    age: 42,
                    address: path,
                }
            })
            setData(data);
            setIsLoading(false);
        }
        fetchData();
    }, []);

    const dataSource = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ];

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return (<div>{isLoading ? <span>isLoading...</span> : <Table dataSource={data} columns={columns} />}</div>)
}

export default Home
