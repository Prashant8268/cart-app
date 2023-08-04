import Navbar from "./components/Navbar";
import Items from "./components/Items";
import CartComponent from "./components/Cart";
export default function() {



    return(
        <div className='App'>
          <h2>Shopping Cart</h2>
            <Navbar />
            <Items />
            <CartComponent />
        </div>

    );
}