const defaultState = {
    scrollPos: 0,
    headerHeight: 0
}
const styleReducer = (state = {...defaultState}, action) => {
    switch(action.type){
        case 'SET_SCROLL_POS':
            return {
                ...state,
                scrollPos: action.scrollPos
            }
        case 'SET_HEADER_HEIGHT':
            return {
                ...state,
                headerHeight: action.headerHeight
            }
        default: 
            return state
    }
}

export default styleReducer