import React, { useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import * as productActions from '../../redux/products/product.actions';
import * as productReducer from '../../redux/products/product.reducer';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from "../layout/Spinner";

interface IProps{}
interface IState{
    productKey : productReducer.ProductState
}

let ProductAdmin:React.FC<IProps> = ({}) => {
    let dispatch = useDispatch();

    //get the products data from Redux store
    let productState:productReducer.ProductState = useSelector((store : IState) => {
        return store.productKey;
    });

    let {products, loading, errorMessage} = productState;

    useEffect(() => {
        dispatch(productActions.getAllProducts());
    }, [])

    let clickDeleteProduct = (productId : string | undefined) => {
        if(productId){
            //dispatch an action to delete
            dispatch(productActions.deleteProduct(productId));
        }
        
    }

    return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3">Admin Dashboard</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatum at ea sunt harum, quasi quos odit. Doloremque temporibus quisquam odit! Exercitationem ut itaque repellendus velit rerum, quae laborum voluptatibus!</p>
                            <NavLink to={'/products/add'} className="btn btn-success btn-sm">
                                <i className="fa fa-pen"></i> Create New
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner /> : <React.Fragment>
                    {
                        !loading && products.length > 0 ?
                        <section className="mt-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <table className="table table-hover table-striped text-center align-middle shadow">
                                            <thead className="bg-secondary text-white">
                                                <th>SNO</th>
                                                <th>Product</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Available</th>
                                                <th>Actions</th>
                                            </thead>
                                            <tbody>
                                                {
                                                    products.map(product => {
                                                        return(
                                                            <tr key={product._id}>
                                                                <td>{product._id?.substr(product._id?.length-5)}</td>
                                                                <td>
                                                                    <img src={product.image} alt="" width={65} height={65} />
                                                                </td>
                                                                <td>{product.name}</td>
                                                                <td>&#8377;{product.price?.toFixed(2)} /Kg</td>
                                                                <td>{product.qty} /Kgs</td>
                                                                <td>
                                                                    <NavLink to={`/products/${product._id}`} className="btn btn-primary btn-sm">
                                                                        <i className="fa fa-edit" />
                                                                    </NavLink>
                                                                    <button className="btn btn-danger btn-sm" onClick={clickDeleteProduct.bind(this, product._id)}>
                                                                        <i className="fa fa-trash" />
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section> : null
                    }
                </React.Fragment>
            }
        </React.Fragment>
    )
}
export default ProductAdmin;