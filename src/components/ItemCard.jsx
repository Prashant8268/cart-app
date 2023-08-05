
import styles from "../styles/ItemCard.module.css";
import { useValue } from "./context";

function ItemCard({ name, price,id}) {

  const {handleAdd,handleRemove} = useValue();

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd(name,price,id)}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(name,price,id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
