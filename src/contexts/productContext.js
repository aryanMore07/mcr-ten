import { createContext, useEffect, useReducer } from "react";
import { reducerFunction } from "../reducers/reducerFunction";
import { inventoryData } from "../data/data";

export const ProductContext = createContext();

export function ProductProvider({ children }) {

    const data = localStorage.getItem('allData');
    const presistData = data ? JSON.parse(data) : inventoryData

    const [state, dispatch] = useReducer(reducerFunction, {
        productsData: presistData,
        departmentInput: '',
        lowerStockInput: '',
        productNameInput: '',
    });

    const departmentFilter = state.departmentInput ? state.productsData.filter((item) => item.department === state.departmentInput) : state.productsData;

    const lowStockFilter = state.lowerStockInput ? departmentFilter.filter((item) => item.stock <= 10 && item.stock > !10) : departmentFilter
    
    const nameFilter = state.productNameInput === 'Name' ? lowStockFilter.sort((a, b) => a.name - b.name) : lowStockFilter;

    const priceFilter = state.productNameInput === 'Price' ? nameFilter.sort((a, b) => a.price - b.price) : nameFilter;

    const stockFilter = state.productNameInput === 'Stock' ? priceFilter.sort((a, b) => a.stock - b.stock) : priceFilter;

    useEffect(() => {
        localStorage.setItem('allData', JSON.stringify(state.productsData))
    }, [state]);

    return <ProductContext.Provider value={{ state, dispatch, stockFilter }}>{children}</ProductContext.Provider>
}   