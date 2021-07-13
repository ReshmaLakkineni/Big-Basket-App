import React, { useEffect } from 'react';
import * as productActions from '../../redux/products/product.actions';
import * as productReducer from '../../redux/products/product.reducer';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from "../layout/Spinner";

interface IProps{}
interface IState{
    productKey : productReducer.ProductState
}

let ProductDisplay:React.FC<IProps> = ({}) => {
    let dispatch = useDispatch();

    // get the products data from Redux Store
    let productState:productReducer.ProductState = useSelector((store : IState) => {
        return store.productKey;
    });

    let {products, loading, errorMessage} = productState;

    //when page loads we want to dispatch an action call getAllProducts
    useEffect(() => {
        dispatch(productActions.getAllProducts());
    }, []); 

    return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success">Product List</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dignissimos perferendis officiis? Quibusdam blanditiis animi laborum sed eum reiciendis sit aliquid? Sed totam id aliquam, culpa suscipit vero voluptatibus atque.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        {
                            loading ? <Spinner /> :
                            <React.Fragment>
                                {
                                    !loading && products.length > 0 &&
                                    products.map(product => {
                                        return(
                                            <div className="col-md-3" key={product._id}>
                                                <div className="card shadow-lg">
                                                    <img src={product.image} alt="" />
                                                    <div className="card-body">
                                                        <ul className="list-group">
                                                            <li className="list-group-item">
                                                                Name : <span className="fw-bold">{product.name}</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                Price : <span className="fw-bold">{product.price} /kg</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                Available : <span className="fw-bold">{product.qty} kgs</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </React.Fragment>
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default ProductDisplay;