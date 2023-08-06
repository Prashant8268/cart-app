import { ADD_TO_CART,REMOVE_FROM_CART,RESET_CART } from "../actions/actions";

const initialState = {
    total:0,
    items:0,
    cart:[]
}

function reducer(state=initialState,action){

    switch(action.type){
        case ADD_TO_CART:  
            const present= state.cart.find((item)=>action.name===item.name);
            if(present){
               const newCart = state.cart.map((item)=>
               {
               if(item.name===action.name){
                item.count= item.count+1;
               }
               return item;  
              }
               );
               return{
                total:state.total+action.price,
                items:state.items+1,
                cart:newCart
               }
         
            }
            else {
                return {
                    total:state.total+action.price,
                    items: state.items+1,
                    cart:[...state.cart,{
                        name:action.name,
                        price:action.price,
                        id:action.id,
                        count:1

                    }]
                }

            }
        
        case REMOVE_FROM_CART:
            if(state.total===0){
                return state;
              }
              const present1= state.cart.find((item)=>action.name===item.name);
              if(!present1){
                return state;
              }
              
              if(present1.count>0){
                  let newCart = state.cart.map((item)=>{
                    if(item.name===action.name){
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
                  
                  return {
                    total: state.total-action.price,
                    items:state.items-1,
                    cart:check 
                  }
                };
        
        case RESET_CART:
            return {
                total:0,
                items:0,
                cart:[]
            }
        
        default:
            return state;


    }
}

export default reducer;