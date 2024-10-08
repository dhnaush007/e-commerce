import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();


const ShopContextProvider = (props)=> {

    const currency = '$';
    const deilvery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch]= useState(false)
    const [cartItems,setCartItems] = useState({});
    const navigate = useNavigate();


    const addTocart = async (itemId,size)=>{

        if (!size) {
             toast.error('Select Products Size');
             return;
        }
       
     let cartData = structuredClone(cartItems);


    if (cartData[itemId]) {
        if (cartData[itemId][size]) {
            cartData[itemId][size] += 1;
            
        }
        else{
            cartData[itemId][size] = 1;

        }
    }
    else{
        cartData[itemId] = {};
        cartData[itemId][size] =1;

    }
    setCartItems(cartData)

    }

const getCartCount = () =>{
    let totalCount = 0 ;
    for(const items in cartItems){
        let item
        for(const item in cartItems [items]){
            try {
            if (cartItems[items][item] > 0) {
                totalCount += cartItems[items][item]
            }
            } catch (error) {
                
            }
        }
    }
    return totalCount;
}
  
const updateQuantity = async (itemId,size,quantity)=>{

    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);

}

const getCartAmount = ()=>{
    let totalAmount = 0;
    for(const itmes in cartItems){
        let itemInfo = products.find((product)=> product._id === itmes);
        for(const item in cartItems[itmes]){
            try {
                if (cartItems[itmes][item] > 0) {
                    totalAmount += itemInfo.price * cartItems[itmes][item]
                }
                
            } catch (error) {
                
            }
        }
    }
    return totalAmount;
}




    const value ={
     products, currency , deilvery_fee,
     search,setSearch,showSearch,setShowSearch,
     cartItems,addTocart,
     getCartCount,updateQuantity,getCartAmount,navigate

     
    }



   

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider