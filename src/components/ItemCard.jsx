import React, { useContext } from "react";
import styles from "../styles/ItemCard.module.css";
import itemContext from "./context";

function ItemCard({ name, price }) {

  const value = useContext(itemContext);
  const handleAdd = () => {
    value.setItem(value.item+1);
    value.setTotal(price+value.total)};

  const handleRemove = () => {
    console .log('aagye yhha ', value);
  
      if(value.item){
          value.setItem(value.item-1);
  
      }
      
    if(value.total===0){
      return ;
    }
    value.setTotal(value.total-price);


  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
