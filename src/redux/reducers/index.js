import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./ProductReducer";

const reducers = combineReducers({
    allproducts:productReducer,
    selectedProductReducer: selectedProductReducer
})

export default reducers;