export const addProduct = (product) => {
    return (dispatch) => {
        dispatch({
            type: "addProduct",
            payload: product
        })
    }
}