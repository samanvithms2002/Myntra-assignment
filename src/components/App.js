import React, { useCallback, useEffect, useState } from "react";
// import fakestore from "../api/Fakestore";
import {commerce} from "../lib/Commerce";
import NavigationBar from "./NavigationBar/NavigationBar";
import MainContent from "./MainContent/MainContent";
import ItemDetails from "../components/ItemDetails/ItemDetails";
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Cart from "../components/Cart/Cart";
import "./app.css";
const App =()=>{
const [products,setProducts]=useState([]);
const [cart,setCart]=useState([]);
// const [search, setSearch]=useState('');
const [state, setState] = useState('start')
const [change, setChange]= useState([])
const triggerAddTripState = () => {
    setState('add-trip')
  }
const makeChange = async (productID)=>{
   
    triggerAddTripState()
   
   const change= await commerce.products.retrieve(productID)
    setChange( change)
    console.log(change)
   
}


const fetchProducts=async () =>{
    const {data} = await commerce.products.list();
    setProducts(data);
}

const fetchCart = async () =>{
    setCart( await commerce.cart.retrieve())
}
const fetchSearch = async(QueryString)=>{
    setCart(await QueryString)
}

    useEffect(() =>{
        fetchProducts();
        fetchCart();
        
    },[]);
    
    const handleAddToCart = async (productID,quantity)=> {
        const {cart} = await commerce.cart.add(productID, quantity);
        setCart(cart);
        console.log(cart);

    }
    
    const handleUpdateToCart = async (productID,quantity)=>{
        const {cart} = await commerce.cart.update(productID,{quantity});
        setCart(cart)
    }
   
    const handleRemoveFromCart = async (productID) =>{
        const {cart} = await commerce.cart.remove(productID);
        setCart(cart);
    }

    const handleEmptyCart = async () =>{
        const {cart} = await commerce.cart.empty();
        setCart(cart);
    }
    
        return(
           <Router>
            <div>
            
           <Switch>

                <Route exact path="/">
                <div className="navbar">
                    <NavigationBar totalItems={cart.total_items} query={fetchSearch}/>
                </div>
                {
                    state==='start' &&(
                        <div className="Maincontent">
                    <MainContent products={products} onAddToCart={handleAddToCart}  change={makeChange}/>  
                        </div>
                    )
                }
                
                {
                    state==='add-trip' &&(
                        <ItemDetails change={makeChange}/>
                    )
                    
                }


                </Route>

                <Route exact path="/cart">
                <div>
                <div className="navbar">
                    <NavigationBar totalItems={cart.total_items}/>
                </div>
                    <Cart cart={cart} 
                        handleUpdateToCart={handleUpdateToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        handleEmptyCart = {handleEmptyCart}
                    />
                </div>

                </Route>
                <Route exact path="/details">
                <div className="navbar">
                    <NavigationBar totalItems={cart.total_items}/>
                </div>
                <div className="itemDetails">
                {
                    state==='start' &&(
                        <ItemDetails addTrip={triggerAddTripState}/>
                    )
                    
                }
               
               
                </div>
                   
                </Route>



           </Switch>
                
               


            
            
            
           
           
            </div>
            </Router>
        );
    
        
    
}

export default App;