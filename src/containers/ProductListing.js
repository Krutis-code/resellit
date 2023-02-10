import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent';
import { ActionTypes } from '../redux/constants/action_types';
import axios from 'axios';
import {setProducts, fetchProducts} from '../redux/actions.js/productAction';
const ProductListing = () => {
        const fetchData = async () =>{
        const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log("error",err)
        })
        console.log("response fetchData",response);
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
        console.log("use effeect")
        fetchData();
        // dispatch(fetchProducts());
    }, [])
    
    const dispatch = useDispatch();
    const  products = useSelector((state)=> state);
    console.log("products",products.data);
    return (
        <div className="ui grid container">
        Fake Shop
        <ProductComponent />
      </div>
    )
}

export default ProductListing
