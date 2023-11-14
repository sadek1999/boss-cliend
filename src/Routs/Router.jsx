
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import Main from '../laout/Main';
import Menu from '../Pages/Menu/Mernu/Menu';
import Order from '../Pages/Order/Order.jsx/Order';

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
          path:'order',
          element:<Order></Order>
        }
        
      ]
    },
  ]);
  
  export default router;