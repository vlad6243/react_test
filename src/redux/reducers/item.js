import {ITEM_ADD, ITEM_DELETE, ITEMS_DELETE, ITEMS_START} from "../actions/actionTypes";

const initialState = {
    items:[]
}

export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case ITEMS_START:
            return {
                ...state, items: action.items
            }
        case ITEM_ADD:
            return {
                ...state, items: [...state.items, action.item]
            }
        case ITEM_DELETE:
            return {
                ...state, items: state.items.filter(el => el.id !== action.id)
            }
        case ITEMS_DELETE:
            return {
                ...state, items: []
            }
        default:
            return state
    }

}