import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Home from './pages/home/home';
import {Error404} from './pages/error404/error404';
import {AccommodationCard} from './pages/accommodation-card/accommodation-card';
import {About} from './pages/about/about';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <Error404/>,
    },
    {
        path: '/accommodation-card',
        element: <AccommodationCard/>,
    },
    {
        path: '/about',
        element: <About/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Header/>
        <RouterProvider router={router}/>
        <Footer/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
