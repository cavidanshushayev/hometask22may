import Addauthor from "../pages/Addauthor";
import AuthorDetail from "../pages/AuthorDetail";
import Authors from "../pages/Authors";
import Home from "../pages/Home";
import Mainroot from "../pages/Mainroot";
import Editauthor from "../pages/editauthor";

export const ROUTES = [
    {
        path: '/',
        element: <Mainroot />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/authors',
                element: <Authors />
            }, {
                path: '/authordetail/:id',
                element: <AuthorDetail />
            }, {
                path: '/addauthor',
                element: <Addauthor />
            },{
                path: '/editauthor/:id',
                element: <Editauthor/>
            }

        ]
    }
]