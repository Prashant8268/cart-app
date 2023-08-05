import { createContext,useContext } from "react";
import { useState } from "react";
import CartComponent from "./Cart";
const itemContext  = createContext();

function useValue(){
    const value= useContext(itemContext);
    return value;
}
function CustomItemProvider({children}){

    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [cart,setCart] = useState([]);
    const[showCart,setShowcart]= useState(false);


    function resetCart(){
        setCart([]);
        setItem(0);
        setTotal(0);
    }; 

    function toggleCart(){
        return setShowcart(!showCart);
    }
    

    const handleAdd = (name,price,id) => {
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
          newCart.push({name, count:1,price,id});
        }
    
      };
    
    
    
      const handleRemove = (name,price,id) => {
        
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
          

    return(
        <itemContext.Provider value= {{toggleCart,total,setTotal,setItem,item,cart,setCart,handleAdd,handleRemove,resetCart}} >
            
            {/* {showCart && <CartComponent toggleCart = {toggleCart} />} */}
            {children}
        </itemContext.Provider>
    )
}

export default itemContext;
export {CustomItemProvider,useValue}