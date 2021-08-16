const initialState = {
    products: [
        {name: "apple", description: 'an apple a day', price: '$10', inventoryDate: '10 June 2021' },
        {name: "steering", description: 'used to steer cars', price: '$500', inventoryDate: '12 June 2021' },
        {name: "cocacola", description: 'refreshing cold drink', price: '$5', inventoryDate: '12 August 2021' }
    ]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "addProduct":
            var pro = state.products;
            return { ...state, products: [...pro, action.payload] }
        default:
            return state;
    }
}

export default reducer;