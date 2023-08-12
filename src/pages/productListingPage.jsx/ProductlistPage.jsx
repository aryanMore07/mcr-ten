import React, { useContext } from 'react';
import './productListPage.css';
import { ProductContext } from '../../contexts/productContext';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function ProductlistPage() {

    const { dispatch, stockFilter } = useContext(ProductContext);

    return (
        <div className='product-listing-page'>
            <div className='filter-div'>
                <h3 style={{ cursor: 'pointer' }}>Products</h3>
                <select name="departments" id="departments" onChange={(event) => {
                    dispatch({type: 'DEPARTMENT_INPUT', payload: event.target.value});
                }}>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Toys">Toys</option>
                </select>

                <label htmlFor="low-stock">
                    <input type="checkbox" onChange={(event) => {
                        dispatch({type: 'CHECKBOX_INPUT', payload: event.target.value})
                    }} />
                    Low stock
                </label>

                <select name="products" id="filter_by_title" onChange={(event) => {
                    dispatch({type: 'PRODUCT_INPUT', payload: event.target.value});
                }}>
                    <option value="Name">Name</option>
                    <option value="Price">Price</option>
                    <option value="Stock">Stock</option>
                </select>

                <div>
                    <Link to='/add-product'>
                        <Button variant='contained'>Add product</Button>
                    </Link>
                </div>
            </div>
            <table>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Supplier</th>
                </tr>
                {
                    stockFilter.map((item) => {
                        const { id, name, description, price, stock, supplier, imageUrl } = item;
                        return (
                            <tr key={id}>
                                <td><img src={imageUrl} alt={name} className='product-img' /></td>
                                <td><Link to={`/product/${id}`}>{name}</Link></td>
                                <td>{description}</td>
                                <td>{price}</td>
                                <td>{stock}</td>
                                <td>{supplier}</td>
                            </tr>
                        )
                    })
                }

            </table>
        </div>
    )
}

export default ProductlistPage;
