import Home from "../pages/HomePage/Home";
import Cart from "../pages/CartPage/Cart";
import NotFound from "../pages/NotFound/NotFound";

export const routes = [
    {
        id:1,
        exact:true,
        path:'/',
        component:Home,
    },
    {
        id:2,
        exact:true,
        path:'/cart',
        component:Cart,
    },
    {
        id:3,
        exact:false,
        path:'*',
        component:NotFound,
    },
]