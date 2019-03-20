const defaultState = {
    modalIsOpen: true,
    selectedItem: {
        name: 'Vojo Hike 2 Texapore Mid',
        price: 119,
        sex: 'male',
        image: './images/mens_shoes_vojo.jpg',
        cat: 'shoes',
        sizes: ['36', '37', '38', '39', '40', '41'],
        colors: ['red', 'green', 'blue']
    },
    cart: []
}

const shoppingReducer = (state = {...defaultState}, action) => {
    switch(action.type){
        case 'OPEN_ITEM':
            return {
                ...state,
                modalIsOpen: true,
                selectedItem: action.selectedItem
            }
        case 'CLOSE_ITEM':
            return {
                ...state,
                modalIsOpen: false,
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        default:
            return state
    }
}

export default shoppingReducer