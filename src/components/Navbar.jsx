import React from "react";
import styles from "../styles/Total.module.css";
import { Link } from "react-router-dom";
import { useValue } from "./context";

function Navbar() {

  const {total, item,resetCart,toggleCart} = useValue();
 
  return (
    <>
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <button onClick={()=>resetCart()} >Reset</button>
      <Link to='/cart'   >
       <div onClick={()=>toggleCart()} >
      <img  style={{height:'45px',width:'48px'}} src="https://cdn-icons-png.flaticon.com/512/6053/6053970.png" />
      <h3 style={{color:"black", position:'absolute',     top: '80px',
    right: '105px',
    fontSize: 'xx-large'}} >{item}</h3>
      </div>
      </Link>
    </div>
    </>
  );
}

export default Navbar;
