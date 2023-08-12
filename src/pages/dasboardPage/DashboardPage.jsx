import React, { useContext } from 'react';
import './dashBoardPage.css';
import { ProductContext } from '../../contexts/productContext';

function DashboardPage() {

    const { state } = useContext(ProductContext);

    const totalStocks = state.productsData.reduce((acc, curr) => acc + curr.stock, 0);
    const totalDelivered = state.productsData.reduce((acc, curr) => acc + curr.delivered, 0);
    const totalLowStocks = state.productsData.reduce((acc, curr) => curr.stock <= 10 ? acc + curr.stock : acc, 0);

    return (
        <div className='dashboard-div'>
            <div className='data-div'>
                <p style={{ color: '#02B301', fontSize: "20px" }}>{totalStocks}</p>
                <p>Total Stocks</p>
            </div>
            <div className='data-div'>
                <p style={{ color: '#FFA500', fontSize: "20px" }}>{totalDelivered}</p>
                <p>Total Delivered</p>
            </div>
            <div className='data-div'>
                <p style={{ color: '#FE3734', fontSize: "20px" }}>{totalLowStocks}</p>
                <p>Low Stocks Items </p>
            </div>
        </div>
    )
}

export default DashboardPage
