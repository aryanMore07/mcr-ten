/* eslint-disable eqeqeq */
import React, { useContext } from 'react';
import './singleProductPage.css';
import { useNavigate, useParams } from 'react-router'
import { ProductContext } from '../../contexts/productContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SingleProductPage() {

    const navigate = useNavigate();
    const { productId } = useParams()
    const { state } = useContext(ProductContext);

    const selectedProduct = state.productsData.find((item) => item.id == productId)
    const { department, name, description, price, stock, sku, supplier, delivered, imageUrl } = selectedProduct

    return (
        <>
            <h2 className='heading' onClick={() => {
                navigate('/products');
            }}> <span style={{cursor: "pointer"}}> <ArrowBackIcon /> </span> {name}</h2>
            <div className='single-product-div'>
                <div className='product_img'>
                    <img src={imageUrl} alt={name} className='img' />
                </div>
                <div className='details-div'>
                    <p><b>Price: </b>{price}</p>
                    <p><b>Instock: </b>{stock}</p>
                    <p><b>Supplier: </b>{supplier}</p>
                    <p><b>Department: </b>{department}</p>
                    <p><b>SKU: </b>{sku}</p>
                    <p><b>Delivered: </b>{delivered}</p>
                    <p><b>Description: </b>{description}</p>
                </div>
            </div>
        </>
    )
}

export default SingleProductPage
