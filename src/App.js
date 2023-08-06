import './App.css';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import CartComponent from './components/Cart';
import SubApp from './SubApp';
import { CustomItemProvider } from "./components/context";
import { Provider } from 'react-redux';
import store from './redux/store';





function App() {


  const router = createBrowserRouter([
    {
      path: '/cart-app', element:<SubApp />
    },
    {
      path: 'cart-app/cart', element : <CartComponent />
    }

  ])



  return (
    <> 
    <Provider store={store} >
    <CustomItemProvider>
    <RouterProvider router={router} />
    </CustomItemProvider>
     <Outlet />
     </Provider>
   </>
  );
}
export default App;
