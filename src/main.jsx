import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './index.css'
import './App.css'
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
<ToastContainer/>
    <App/>
    </>

)
