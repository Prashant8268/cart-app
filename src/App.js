import './App.css';
import { useContext, useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';
import itemContext from './components/context'



function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);


  // const cartDetails = useContext(itemContext);


  return (
        <div className='App'>
          <h2>Shopping Cart</h2>
          <itemContext.Provider value= {{total,setTotal,item,setItem}}>
            <Navbar />
            <Items />
            </itemContext.Provider>
        </div>
  );
}
export default App;
