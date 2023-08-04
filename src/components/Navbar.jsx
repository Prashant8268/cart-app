import React from "react";
import styles from "../styles/Total.module.css";
import { useContext } from "react";
import itemContext from "./context";
import { Link } from "react-router-dom";

function Navbar() {

  const value = useContext(itemContext);
  console.log(value, 'yhha');
  return (
    <>
    <div className={styles.container}>
      <h1>Total : &#x20B9; {value.total}</h1>
      <h1>Items: {value.item}</h1>
      <Link to='/cart' >
       <div>
      <img  style={{height:'45px',width:'48px'}} src="https://cdn-icons-png.flaticon.com/512/6053/6053970.png" />
      <h3 style={{color:"black", position:'absolute',     top: '90px',
    right: '150px',
    fontSize: 'xx-large'}} >{value.item}</h3>
      </div>
      </Link>
    </div>
    </>
  );
}

export default Navbar;
