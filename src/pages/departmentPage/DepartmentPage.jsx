import React, { useContext } from 'react';
import './departmentPage.css';
import { useNavigate } from 'react-router';
import { ProductContext } from '../../contexts/productContext';

function DepartmentPage() {

    const navigate = useNavigate();
    const { dispatch } = useContext(ProductContext);

    return (
        <div className='department-div'>
            <div className='data-div' onClick={() => {
                navigate('/products');
                dispatch({type: 'DEPARTMENT_INPUT', payload: 'Kitchen'})
            }}>
                <p>Kitchen</p>
            </div>
            <div className='data-div' onClick={() => {
                navigate('/products');
                dispatch({type: 'DEPARTMENT_INPUT', payload: 'Clothing'})
            }}>
                <p>Clothing</p>
            </div>
            <div className='data-div' onClick={() => {
                navigate('/products');
                dispatch({type: 'DEPARTMENT_INPUT', payload: 'Toys'})
            }}>
                <p>Toys</p>
            </div>
        </div>
    )
}

export default DepartmentPage
