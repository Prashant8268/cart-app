import React from "react";
import styles from "../styles/Total.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RESET_CART ,resetCart} from "../redux/actions/actions";
import { useDispatch } from "react-redux";

function Navbar() {

  // const {total, item,resetCart,toggleCart} = useValue();
    
    const total = useSelector((store)=>store.total);
    const items = useSelector((store)=>store.items);
    const dispatch = useDispatch();
     
    


 
  return (
    <>
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {items}</h1>
      <button onClick={()=>dispatch(resetCart(RESET_CART))} >Reset</button>
      <Link to='cart'   >
       <div  >
      <img  style={{height:'45px',width:'48px'}} src="https://cdn-icons-png.flaticon.com/512/6053/6053970.png" />
      <h3 style={{color:"black", position:'absolute',     top: '80px',
    right: '105px',
    fontSize: 'xx-large'}} >{items}</h3>
      </div>
      </Link>
    </div>
    </>
  );
}

export default Navbar;
