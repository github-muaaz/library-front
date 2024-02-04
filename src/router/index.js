import {useEffect, useState} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import Home from "../pages/home";
// import NotFound from "../pages/notFound";
// import {Books} from "../pages/books";
// import {BASE_PATH} from "../utils";
// import {Book} from "../pages/book";

const Router = () => {

    const [website, setWebsite] = useState({})

    // const getWebsite = () => {
    //     axios.get(
    //         BASE_PATH + '/website',
    //     ).then(res =>
    //         setWebsite(res.data.data)
    //     ).catch(err =>
    //         toast.error(err.response.data.errors[0].msg)
    //     )
    // }
    //
    // useEffect(() =>
    //         getWebsite(),
    //     []
    // )

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home website={website}/>
        },
        {
            path: 'home',
            element: <Home website={website}/>
        },
        {
            path: 'books',
            // element: <Books website={website}/>
        },
        {
            path: 'book/:param',
            // element: <Book website={website}/>
        },
        {
            path: '404',
            // element: <NotFound/>
        }
    ]);


    return (
        <RouterProvider router={router}/>
    )
}

export default Router;