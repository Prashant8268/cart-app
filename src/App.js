import './App.css';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import CartComponent from './components/Cart';
import SubApp from './SubApp';
import { CustomItemProvider } from "./components/context";





function App() {


  const router = createBrowserRouter([
    {
      path: '/', element:<SubApp />
    },
    {
      path: '/cart', element : <CartComponent />
    }

  ])



  return (
    <> 
    <CustomItemProvider>
    <RouterProvider router={router} />
    </CustomItemProvider>
     <Outlet />
   </>
  );
}
export default App;
