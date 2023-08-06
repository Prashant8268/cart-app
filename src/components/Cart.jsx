import { Link } from "react-router-dom";
import styles from "../styles/ItemCard.module.css";
import { useValue } from "./context";
import  styles1 from  './Cart.module.css'; 
import { useSelector } from "react-redux";
export default function CartComponent(){


  
    // const {cart} = useValue();
    const cart = useSelector((store)=>store.cart);
    return(
   <>
   <div className = {styles1.cartContainer}>
    <h1 className={styles1.heading}>Cart</h1>
      <div>
     <Link to='/cart-app' >  <button className={styles1.goBack}>Go back</button>  </Link>
      </div>
      <div className={styles1.itemsContainer}>
      {cart.map((item)=> 
        (
        <div className={styles1.item} key={item.id}>
          <div>{item.name}</div>
          <div>{item.count}</div>

      </div>)
      )}
      </div>

   </div>















           {/* <div style={{
            display:'flex',
            flexDirection:'row',
            padding:'10px',
            flexWrap:'wrap',
            zIndex:'4',
            position: 'absolute',
            top:'100px',
            left:'50'
            }}>
              <Link to = '/cart-app' >Home</Link> */}
              {/* <button onClick={()=>toggleCart()} >Close</button> */}
                {/* {cart.map((item)=>(     

                  <div className={styles.itemCard} key={item.id} >
                  <div className={styles.itemName}>{item.name}</div>
                  <div className={styles.itemPrice}>&#x20B9; {item.price}</div>
                    <div className={styles.itemButtonsWrapper}>
                        {item.count}
                    </div>
                  </div>
              ))}
     </div> */}

     </>

    )
}