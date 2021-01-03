import data from "../../items.json";
import {ITEM_ADD, ITEM_DELETE, ITEMS_DELETE, ITEMS_START} from "./actionTypes";

export function initItems() {
    return dispatch => {
        localStorage.setItem("items",JSON.stringify(data));

        dispatch(itemsStart(data));
    }
}

export function itemsStart(items) {
    return{
        type: ITEMS_START,
        items
    }
}

export function addItem(item) {
    return async (dispatch,getState) => {
        const items = getState().item.items;

        const newId = items.length !== 0 ? items[items.length-1].id : 0;
        const newItem = {
            id: newId + 1,
            itemName: item.itemName,
            description: item.description,
            imgUrl:item.imgUrl,
            price:Number(item.price)
        }

        let res = await JSON.parse(localStorage.getItem("items"))
        res = [...res, newItem]
        localStorage.setItem("items",JSON.stringify(res))

        dispatch(itemAdd(newItem))
    }
}

export function itemAdd(item) {
    return{
        type: ITEM_ADD,
        item
    }
}

export function deleteItem(id) {
    return async dispatch =>{
        let res = await JSON.parse(localStorage.getItem("items"))
        res = res.filter(el => el.id !== id)
        localStorage.setItem("items",JSON.stringify(res))

        dispatch(itemDelete(id))
    }
}

export function itemDelete(id) {
    return{
        type: ITEM_DELETE,
        id
    }
}

export function deleteItems() {
    return dispatch => {
        localStorage.setItem("items","[]")
        dispatch(itemsDelete())
    }
}

export function itemsDelete() {
    return{
        type: ITEMS_DELETE
    }
}

