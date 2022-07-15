import React from "react";
import Layout from "./layout/index";
import { Navigate } from 'react-router-dom';
import { getToken } from '@/utils/auth'

function App() {
    return (
        getToken() ?
            <Layout></Layout>
            : <Navigate to="/login"></Navigate>
    )
}



export default App
