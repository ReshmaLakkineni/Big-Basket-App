import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Product } from './models/Product';
import {useDispatch } from 'react-redux';
import * as productActions from '../../redux/products/product.actions'

interface IProps{}
interface IState{
    product : Product
}

let AddProduct:React.FC<IProps> = ({}) => {
    let history = useHistory();
    let dispatch = useDispatch();

    let [state, setState] = useState<IState>({
        product : {
            name : '',
            image : '',
            price : 0,
            qty : 0,
            info : ''
        }
    });

    let onChangeInput = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setState({
            product : {
                ...state.product,
                [event.target.name] : event.target.value
            }
        })
    };

    let submitCreateproduct = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //dispatch an action to create a product
        //createProduct(state.product, history(for internal Navigation,redirection i.e, push to some page))
        dispatch(productActions.createProduct(state.product, history));
    };

    return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3">Add Product</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus beatae minima porro, eum ipsum earum numquam perspiciatis praesentium accusantium corrupti quidem. Voluptates, voluptatum veniam eligendi architecto repudiandae fuga! Assumenda, corporis.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <pre>{JSON.stringify(state.product)}</pre> */}
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                           <div className="card">
                                <div className="card-header bg-success text-white">
                                    <p className="h4"> <i  className="fa fa-pen"/> Create Product</p>
                                </div>
                                <div className="card-body bg-light-green">
                                    <form onSubmit={submitCreateproduct}>
                                        <div className="mb-2">
                                            <input 
                                                required
                                                value={state.product.name}
                                                name='name'
                                                onChange={onChangeInput}
                                                type="text" className="form-control" placeholder="Name" />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                required
                                                value={state.product.image}
                                                name='image'
                                                onChange={onChangeInput}
                                            type="text" className="form-control" placeholder="Image URL" />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                required
                                                value={state.product.price}
                                                name='price'
                                                onChange={onChangeInput}
                                            type="number" className="form-control" placeholder="Price" />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                required
                                                value={state.product.qty}
                                                name='qty'
                                                onChange={onChangeInput}
                                            type="number" className="form-control" placeholder="Quantity" />
                                        </div>
                                        <div className="mb-2">
                                            <textarea 
                                                required
                                                value={state.product.info}
                                                name='info'
                                                onChange={onChangeInput}
                                                rows={4} className="form-control" placeholder="information"></textarea>
                                        </div>
                                        <div className="mb-2">
                                            <input type="submit" className="btn btn-success btn-sm" value="Create" />
                                        </div>
                                    </form>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default AddProduct;