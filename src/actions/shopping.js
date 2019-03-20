export const openItem = (selectedItem) => ({
    type: 'OPEN_ITEM',
    selectedItem
});

export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    item
})