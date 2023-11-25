import React from 'react';
import WebLayout from './Layouts/Layout';
import DashboardLayout from './Layouts/DashboardLayout';
import Home from './Components/Web/Home/Home.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Categories from './Components/Web/Categories/Categories.jsx';
import router from './router.jsx';


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
