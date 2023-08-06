import Navbar from "./components/Navbar";
import Items from "./components/Items";
import { Link } from "react-router-dom";
export default function() {



    return(
        <div className='App'>
          <h2>Shopping Cart</h2>
            <Navbar />
            <Items />
        </div>

    );
}