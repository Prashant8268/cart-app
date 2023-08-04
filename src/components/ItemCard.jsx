import React, { useContext } from "react";
import styles from "../styles/ItemCard.module.css";
import itemContext from "./context";

function ItemCard({ name, price }) {

  const {total,setTotal,cart,setCart,item,setItem} = useContext(itemContext);

 

 
  const handleAdd = () => {
    setTotal(total+price);
    setItem(item+1);   
    const present= cart.find((item)=>name===item.name);
    if(present){
       const newCart = cart.map((item)=>
       {
       if(item.name===name){
        item.count= item.count+1;
       }
       return item;  
      }
       );
       setCart(newCart); 
 
    }
    else {

      let newCart = cart;
      newCart.push({name, count:1,price});
    }

  };



  const handleRemove = () => {
    
    if(total===0){
      return ;
    }
    const present= cart.find((item)=>name===item.name);
    if(!present){
      return ;
    }
    if(present.count>0){
        setTotal(total-price); 
        setItem(item-1);
        let newCart = cart.map((item)=>{
          if(item.name===name){
            if(item.count>0){
            item.count=item.count-1;
            }
          }
          return item;
  
        });

        let check = [];
        for( let i of newCart){
          if(i.count>0){
            check.push(i);
          }
        }
        setCart(check);
      }; 
      
    

    
    
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
