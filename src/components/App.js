import React, {  useEffect, useState } from "react";
import {commerce} from "../lib/Commerce";
import NavigationBar from "./NavigationBar/NavigationBar";
import MainContent from "./MainContent/MainContent";
import ItemDetails from "../components/ItemDetails/ItemDetails";

import {Link} from "react-router-dom"
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Cart from "../components/Cart/Cart";
import "./app.css";
const App =()=>{
const [products,setProducts]=useState([]);
const [cart,setCart]=useState([]);
const [state, setState] = useState('start')
const [change, setChange]= useState([])
// const triggerAddTripState = () => {
    
//     setState('add-trip')
//   }
let completeData= [];
const makeChange = async (productID)=>{
     
    
    const response= await  commerce.products.retrieve(productID)
    
    setChange( response)
     console.log(commerce.products.retrieve(productID))
     console.log(change)
       setState('add-trip');
   
}


const fetchProducts=async () =>{
    const {data} = await commerce.products.list();
    setProducts(data);
    
}

//console.log(products)
// console.log(completeData.name)
const fetchCart = async () =>{
    setCart( await commerce.cart.retrieve())
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
    const SearchResult = (categoryName) =>{
        console.log(categoryName)
       // console.log(await commerce.categories.list())
            //const {response}= await commerce.categories.retrieve('cat_ZM8X5njJJ5pv4q')
            products.map((value)=>(
                !(value.name).includes(categoryName) ? console.log('no'):completeData.push(value)
                
               
            ))
            //const val = [];
            // products.map(param =>
            // response.name === categoryName ?
               
            //     val.push(param)
 
            // )
            
           
            setProducts(completeData)
            completeData=[];
            
            
           // console.log(val)
    }
    // const handleFilter=(param)=>{
    //     console.log(products)
    //     products.sort((a,b)=>)
    //     param==='lowest'?
        
        
    //     setProducts(status=>{
            
    //             products.sort((a,b)=> (a.price.formatted_with_symbol<b.price.formatted_with_symbol?1:-1)
    //             (a.price.formatted_with_symbol>b.price.formatted_with_symbol?1:-1)
    //             )
    //             return {products:status.products};
    //     }) :
    //     setProducts(status=>{
    //         status.products.sort((a,b)=> (a.id<b.id?1:-1))
    //         return {products:status.products};
    //     })
           
    // }
    const handleFilter= async (param)=>{
        let sorted=[]
       
    if(param==="lowest"){
        sorted =  [...products].sort((a, b) =>{ return (a.price.raw) - (b.price.raw)});
    }    
    else if(param==="highest"){
        sorted =  [...products].sort((a, b) =>{ return (b.price.raw) - (a.price.raw)});
    }
   
    setProducts(sorted)
    }
        return(
           <Router>
            <div>
           
           <Switch>

                <Route exact path="/">
                <div className="navbar">
                    <NavigationBar totalItems={cart.total_items} SearchResult={SearchResult}/>
                </div>
                {
                    state==='start' &&(
                        <div className="Maincontent">
                    <MainContent products={products} onAddToCart={handleAddToCart}  change={makeChange} handleFilter={handleFilter} SearchResult={SearchResult}/>  
                        </div>
                    )
                }
                
                {
                    state==='add-trip' &&(
                        <div>
                        <ItemDetails change={change} onAddToCart={handleAddToCart}  />
                        <Link to="/">
                            <div className="reload"  onClick={() => window.location.reload(false)}> Go Back</div>
                            
                        </Link>
                        </div>
                       
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
                


           </Switch>
                
               


            
            
            
           
           
            </div>
            </Router>
        );
    
        
    
}

export default App;