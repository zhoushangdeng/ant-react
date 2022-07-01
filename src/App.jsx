import React from "react";
import Layout from "./layout/index";
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { getToken } from '@/utils/auth'
function App() {
    return (
        getToken() ?
            <Layout></Layout>
            : <Navigate to="/login"></Navigate>
    )
}

const mapStoreToProps = (state) => {
    return {
        isLogined: state.isLogined
    }
}

export default connect(mapStoreToProps)(App)
