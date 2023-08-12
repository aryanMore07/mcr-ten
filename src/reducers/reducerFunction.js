export function reducerFunction(state, action) {
    switch (action.type) {
        case "DEPARTMENT_INPUT":
            return {
                ...state,
                departmentInput: action.payload,
            }
        case "CHECKBOX_INPUT":
            return {
                ...state,
                lowerStockInput: action.payload,
            }
        case "PRODUCT_INPUT": 
            return {
                ...state,
                productNameInput: action.payload,
            }
        case "ADD_PRODUCT":
            return {
                productsData: [...state.productsData, action.payload],
            }
        default:
            return state;
    }
}