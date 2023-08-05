import { Link } from "react-router-dom";
import styles from "../styles/ItemCard.module.css";
import { useValue } from "./context";
export default function CartComponent({toggleCart}){


  
    const {cart} = useValue();
    return(
   <>
           <div style={{
            display:'flex',
            flexDirection:'row',
            padding:'10px',
            flexWrap:'wrap',
            zIndex:'4',
            position: 'absolute',
            top:'100px',
            left:'50'
            }}>
              <Link to = '/' >Home</Link>
              {/* <button onClick={()=>toggleCart()} >Close</button> */}
                {cart.map((item)=>(     

                  <div className={styles.itemCard} key={item.id} >
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