import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import itemData from '../data/itemData';

function Items() {


  return (
    <div className={styles.wrapper}>
      <ItemCard name="Apple" price={199} id={'apple'}  />
      {itemData.map((item)=><ItemCard name = {item.name} price = {item.price} key={item.id} id={item.id} />)}
    </div>
  );
}

export default Items;
