import { useContext } from "react"
import itemContext from "./components/context"
export default function Check(){

    const {cart}= useContext(itemContext);
    return(
        <div>
            {cart.map((item)=><><h1>{item.name}  and {item.count}</h1></>)}


        </div>
    )
}