import React, { useContext, useState } from 'react'
import './addProduct.css';
import { Button } from '@mui/material';
import { ProductContext } from '../../contexts/productContext';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router';

function AddProduct() {

    const navigate = useNavigate();
    const { dispatch } = useContext(ProductContext);

    const [departmentInput, setDepartmentInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [decriptionInput, setDescriptionInput] = useState('');
    const [priceInput, setPriceInput] = useState('');
    const [stockInput, setStockInput] = useState('');
    const [skuInput, setSKUInput] = useState('');
    const [supplierInput, setSupplierInput] = useState('');
    const [deliveredInput, setDeliveredInput] = useState('');
    const [imageInput, setImageInput] = useState('');

    function resetHandler() {
        setDepartmentInput("")
        setNameInput("")
        setDescriptionInput("")
        setPriceInput("")
        setStockInput("")
        setSKUInput("")
        setDeliveredInput("")
        setImageInput("")
    }

    function addProductHandler() {
        const productDetails = {
            id: uuid(),
            department: departmentInput,
            name: nameInput,
            description: decriptionInput,
            price: priceInput,
            stock: stockInput,
            sku:skuInput,
            supplier: supplierInput,
            delivered: deliveredInput,
            imageUrl: imageInput,
        }
        dispatch({type: 'ADD_PRODUCT', payload: productDetails})
        navigate('/products');
    }

    return (
        <div className='add_product_div'>
            <h2>Add New Product</h2>
            <div className='inputs'>
                <label htmlFor="departments">
                    Department:
                </label>
                <select className='input' name="departments" id="departments" value={departmentInput} placeholder='Select Department' onChange={(event) => {
                    setDepartmentInput(event.target.value)
                }}>
                    <option value='Kitchen'>Kitchen</option>
                    <option value='Clothing'>Clothing</option>
                    <option value='Toys'>Toys</option>
                </select>
                <label htmlFor='product-name'>
                    Name:
                </label>
                <input type="text" name="product-name" id="product-name" className='input' value={nameInput} onChange={(event) => {
                    setNameInput(event.target.value)
                }} />
                <label htmlFor='decription'>
                    Description:
                </label>
                <textarea type="multi" name="decription" id="decription" value={decriptionInput} className='input' cols="40" rows="5" onChange={(event) => {
                    setDescriptionInput(event.target.value);
                }} />
                <label htmlFor="price">Price: </label>
                <input className='input' type="text" name="price" id="price" value={priceInput} onChange={(event) => {
                    setPriceInput(event.target.value)
                }} />
                <label htmlFor="stock">Stock: </label>
                <input className='input' type="text" name="stock" id="stock" value={stockInput} onChange={(event) => {
                    setStockInput(event.target.value)
                }} />
                <label htmlFor="sku">SKU: </label>
                <input className='input' type="text" name="sku" id="sku" value={skuInput} onChange={(event) => {
                    setSKUInput(event.target.value)
                }} />
                <label htmlFor="supplier">Supplier: </label>
                <input className='input' type="text" name="supplier" id="supplier" value={supplierInput} onChange={(event) => {
                    setSupplierInput(event.target.value)
                }} />
                <label htmlFor="delivered">Delivered: </label>
                <input className='input' type="text" name="delivered" id="delivered" value={deliveredInput} onChange={(event) => {
                    setDeliveredInput(event.target.value)
                }} />
                <label htmlFor="img">Image URL: </label>
                <input className='input' type="text" name="img" id="img" value={imageInput} onChange={(event) => {
                    setImageInput(event.target.value)
                }} />
            </div>
            <div>
                <Button variant='outlined' onClick={resetHandler}>Reset</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' onClick={addProductHandler}>Add product</Button>
            </div>
        </div>
    )
}

export default AddProduct
