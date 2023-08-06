const RESET_CART = 'Resset Cart';
const TOGGLE_CART = 'Toggle Cart';
const ADD_TO_CART = "Add to Cart";
const REMOVE_FROM_CART = "Remove from Cart";

const resetCart=()=>({type:RESET_CART});

const handleAdd = (name,price,id) => ({name,price,id,type:ADD_TO_CART});

const handleRemove = (name,price,id)=>({name,price,id,type:REMOVE_FROM_CART});

export {RESET_CART,ADD_TO_CART,REMOVE_FROM_CART,resetCart,handleAdd,handleRemove}
