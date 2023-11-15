
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import Main from '../laout/Main';
import Menu from '../Pages/Menu/Mernu/Menu';
import Order from '../Pages/Order/Order.jsx/Order';
import Login from '../Pages/Login/Login';
import Singup from '../Pages/Singup/Singup';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },{
          path:'/menu',
          element:<Menu></Menu>

        },
        {
          path:'/order/:catagory',
          element:<Order></Order>
        },
        {
          path:'/order',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },{
          path:"/singup",
          element:<Singup></Singup>

        }
        
      ]
    },
  ]);
  
  export default router;