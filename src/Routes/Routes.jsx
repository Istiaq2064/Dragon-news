import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../HomeLayout/HomeLayout';
import CategoryNews from '../CategoryNews/CategoryNews';
import AuthLayout from '../HomeLayout/AuthLayout';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"",
                element:<Navigate to={"/category/01"}></Navigate>
              
            },
            {
                path:"/category/:id",
                element:<CategoryNews></CategoryNews>,
                loader:({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            },
        ],
    },
    {
        path:'/news',
        element:<h2>This Is news Here</h2>
    },
    {
        path:'auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<h2>Log in</h2>
            },
            {
                path:'/auth/register',
                element:<h2>Register</h2>
            }
        ]
    },
    {
        path:'*',
        element:<h1>Error</h1>
    }
])

export default Routes;