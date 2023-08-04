import { useContext } from "react"
import itemContext from "./context"
import styles from "../styles/ItemCard.module.css";
export default function CartComponent(){

  

    const {cart} = useContext(itemContext);

    return(
   <>
           <div style={{
            display:'flex',
            flexDirection:'row',
            padding:'10px',
            flexWrap:'wrap',
            
            }}>
      {cart.map((item)=>(     

        <div className={styles.itemCard}>
      <div className={styles.itemName}>{item.name}</div>
      <div className={styles.itemPrice}>&#x20B9; {item.price}</div>
      <div className={styles.itemButtonsWrapper}>
        {item.count}
     </div>
     </div>
     ))}
     </div>

     </>

    )
}