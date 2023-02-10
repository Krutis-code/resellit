import { ActionTypes } from "../constants/action_types"
import axios from "axios"
import fakeStoreApi from '../../api/fakeStoreApi';
export const setProducts = (products) =>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (product) =>{
    console.log("onside product action ",product);
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const getSelectedProduct = (productID) =>{
   return async function(dispatch,getState){
       console.log("dispatch",dispatch);
       console.log("get Statae..................",getState);

       const res = await fakeStoreApi(`/products/${productID}`)
        dispatch({type:ActionTypes.GET_SELECTED_PRODUCT, payload:res.data})

   }
}



export const removeSelectedProduct = (product) =>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const fetchProducts = () =>{

    return async function (dispatch, getState){
        const res = await fakeStoreApi.get('/products');
        dispatch({type:ActionTypes.FETCH_PRODUCTS,payload : res.data})

    }

    // const fetchData = async () =>{
    //     const response = await axios.get("/products");
    //     console.log("response fetchData action creator",response);
    //     // dispatch(setProducts(response.data))
    //     return {
    //         type:ActionTypes.SELECTED_PRODUCT,
    //         payload:response
    //     }
    // }
}