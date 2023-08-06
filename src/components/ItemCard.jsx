
import styles from "../styles/ItemCard.module.css";
import { useDispatch } from "react-redux";
import { useValue } from "./context";
import { handleAdd,handleRemove,ADD_TO_CART,REMOVE_FROM_CART } from "../redux/actions/actions";

function ItemCard({ name, price,id}) {

  // const {handleAdd,handleRemove} = useValue();
  const dispatch = useDispatch();


  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => dispatch(handleAdd(name,price,id))}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => dispatch(handleRemove(name,price,id))}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
