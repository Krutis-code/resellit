import React from 'react'
import { useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions.js/productAction";
const Details = () => {
    useEffect(() => {
        console.log("inside use effect")
        if (id && id !== "")
        {
        fetchProductDetail(id);
    
    
      } 
        
    }, [])

    const { id } = useParams();
    console.log("product id",id)
    useEffect(()=>{
      console.log("inside gete details componenrt..............................")
    },[])


    
  let product = useSelector((state) => {console.log("state",state);return state.selectedProductReducer});
//   const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
      console.log("product inside fetch product details id",id);
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    console.log("response selected product",response);
    dispatch(selectedProduct(response.data));
  };
  return (
    <div className="ui grid container">
    {console.log("productzzzzzzzzzzzzzzzz",product)}
  {Object.keys(product).length === 0 ? (
    <>

    <div>...Loading</div>
    <div>...Loading</div>
    <div>...Loading</div>
    <div>JJ</div>
    <p>JJ</p>
    <p>JJ</p>
    <p>JJ</p>
    </>
  ) : (
    <div className="ui placeholder segment">
      <div className="ui two column stackable center aligned grid">
        <div className="ui vertical divider">AND</div>
        <div className="middle aligned row">
          <div className="column lp">
            <img className="ui fluid image" src={product.image} />
          </div>
          <div className="column rp">
            <h1>{product.title}</h1>
            <h2>
              <a className="ui teal tag label">${product.price}</a>
            </h2>
            <h3 className="ui brown block header">{product.category}</h3>
            <p>{product.description}</p>
            <div className="ui vertical animated button" tabIndex="0">
              <div className="hidden content">
                <i className="shop icon"></i>
              </div>
              <div className="visible content">Add to Cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</div>
  )

}

export default Details
