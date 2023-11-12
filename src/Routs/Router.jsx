
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
        
      ]
    },
  ]);
  
  export default router;