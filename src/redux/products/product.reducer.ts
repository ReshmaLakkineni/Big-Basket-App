import { Product } from '../../modules/products/models/Product';
import * as productActions from './product.actions';

//whole appln state
export interface ProductState {
    loading : boolean;
    products : Product[];
    selectedProduct : Product;//to update
    errorMessage : string;
}

let initialState:ProductState = {
    loading : false,
    products : [] as Product[],
    selectedProduct : {} as Product,
    errorMessage : ''
};
//reducer
export const reducer = (state = initialState, action:any):ProductState => {
    switch(action.type){
        //create a product
        case productActions.CREATE_PRODUCT_REQUEST:
            return {
                ...state,
                loading : true
            };
        case productActions.CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading : false
            }
        case productActions.CREATE_PRODUCT_FAILURE:
            return {
                ...state,
                loading : false,
                errorMessage : action.payload.error
            };

        //Get all product
        case productActions.GET_ALL_PRODUCTS_REQUEST:
            return {
                ...state,
                loading : true
            };
        case productActions.GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading : false,
                products : action.payload.products //keep it in store,   state is filled with server side products
            }
        case productActions.GET_ALL_PRODUCTS_FAILURE:
            return {
                ...state,
                loading : false,
                errorMessage : action.payload.error
            };

        //DELETE a product
        case productActions.DELETE_PRODUCT_REQUEST:
            return {
                ...state,
                loading : true
            };
        case productActions.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading : false
            }
        case productActions.DELETE_PRODUCT_FAILURE:
            return {
                ...state,
                loading : false,
                errorMessage : action.payload.error
            };

        //Get a product
        case productActions.GET_PRODUCT_REQUEST:
            return {
                ...state,
                loading : true
            };
        case productActions.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading : false,
                selectedProduct : action.payload.product 
            }
        case productActions.GET_PRODUCT_FAILURE:
            return {
                ...state,
                loading : false,
                errorMessage : action.payload.error
            };

        //update input fields
        case productActions.UPDATE_INPUT_FIELDS:
            return  {
                ...state,
                selectedProduct : {
                    ...state.selectedProduct,
                    [action.payload.name] : action.payload.value
                }
            }

        // Update a Product
        case productActions.UPDATE_PRODUCT_REQUEST:
            return  {
                ...state,
                loading : true
            };
        case productActions.UPDATE_PRODUCT_SUCCESS:
            return  {
                ...state,
                loading : false
            };
        case productActions.UPDATE_PRODUCT_FAILURE:
            return  {
                ...state,
                loading : false,
                errorMessage : action.payload.error
            };
        default: return state;
    }
};