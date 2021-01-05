import data from "../../items.json";
import {ITEM_ADD, ITEM_DELETE, ITEMS_DELETE, ITEMS_START} from "./actionTypes";

export const initItems = () => async (dispatch) => {
        const storageData = await JSON.parse(localStorage.getItem("items"));
        if(storageData !== null){

            dispatch({
                type: ITEMS_START,
                payload:storageData
            });
            
        }else{
            localStorage.setItem("items",JSON.stringify(data));

            dispatch({
                type: ITEMS_START,
                payload:data
            });
        }
}

export const addItem = (item) => async (dispatch,getState) => {
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

        dispatch({
            type: ITEM_ADD,
            payload: newItem
        })
}

export const deleteItem = (id) => async (dispatch) => {
        let res = await JSON.parse(localStorage.getItem("items"))
        res = res.filter(el => el.id !== id)
        localStorage.setItem("items",JSON.stringify(res))

        dispatch({
            type: ITEM_DELETE,
            payload:id
        })
}


export const deleteItems = () => (dispatch) =>{
        localStorage.setItem("items","[]")

        dispatch({
            type: ITEMS_DELETE
        })
}

