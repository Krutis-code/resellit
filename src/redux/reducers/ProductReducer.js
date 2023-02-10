import { ActionTypes } from '../constants/action_types';

const initialState = {
    products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            console.log('SET products of products reducer..........................', payload);
            return { ...state, products: payload };

        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload };

        default:
            return state;
    }
};

let initial = {
    product: {},
};
export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            // console.log('payload inside selected [rpduct reducer', payload);
            return { ...state, ...payload };
        case ActionTypes.GET_SELECTED_PRODUCT:
            // console.log('payload inside selected [rpduct reducer', payload);
            return { ...state, ...payload };
        case ActionTypes.SET_PRODUCTS:
            console.log('SET products of selected products reducer//////////////////////', payload);
            return { ...state, ...payload };
        default:
            return state;
    }
};
