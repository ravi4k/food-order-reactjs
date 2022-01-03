import {createStore} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0,
    deliveryApplicable: false
}

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'add': {
            let present = false
            let i
            for(i = 0; i < state.items.length; ++i) {
                if(state.items[i].id === action.payload.id) {
                    present = true
                    break
                }
            }

            let amount = action.payload.price * action.payload.qty
            let newItems
            if(!present) {
                let new_item = {
                    id: action.payload.id,
                    name: action.payload.name,
                    qty: action.payload.qty,
                    amount: amount,
                }
                newItems = [...state.items, new_item]
            } else {
                newItems = [...state.items]
                newItems[i].qty += action.payload.qty
                newItems[i].amount += amount
            }
            let newAmount = state.totalAmount + amount
            return {items: newItems, totalAmount: newAmount}
        }
        default:
            return state
    }
}

export const store = createStore(cartReducer)
