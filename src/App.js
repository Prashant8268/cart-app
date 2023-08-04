import './App.css';
import { useContext, useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';
import itemContext from './components/context'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import CartComponent from './components/Cart';
import SubApp from './SubApp';




function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [cart,setCart] = useState([]);

  const router = createBrowserRouter([
    {
      path: '/',element: <SubApp />
    },
    {
      path: '/cart', element : <CartComponent />
    }

  ])


  // const cartDetails = useContext(itemContext);


  return (
    <> 
    <itemContext.Provider value= {{total,setTotal,item,setItem,cart,setCart}}>
    <RouterProvider router={router} >
        </RouterProvider>
        </itemContext.Provider>
        <Outlet />


        </>
  );
}
export default App;
