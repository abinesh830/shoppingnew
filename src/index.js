import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signin from './COMPONENTS/Sigin';
import Home from './COMPONENTS/Home';
import Adminlogin from './COMPONENTS/Adminlogin';
import Adminsignin from './COMPONENTS/Adminsignin';
import Menu from './COMPONENTS/Menu';
import Cart from './COMPONENTS/Cart';
import Contact from './COMPONENTS/Contact';
import {Provider} from 'react-redux'
import {store} from './STORE/Store'
import Addproducts from './COMPONENTS/Addproducts';

const router=createBrowserRouter([{
  path:'/',
  element:<App/>

},{
  path:'/signin',
  element:<Signin/>
},
{
  path:'/home',
  element:<Home/>
},
{
  path:'/Adminlogin',
  element:<Adminlogin/>
},
{
  path:'/Adminsignin',
  element:<Adminsignin/>
},
{
  path:'/menu',
  element:<Menu/>
},
{
  path:'/cart',
  element:<Cart/>
},
{
  path:'/Contact',
  element:<Contact/>

},{
  path:'/Addproducts',
  element:<Addproducts/>
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
    <RouterProvider router={router}/>


    </Provider>

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
