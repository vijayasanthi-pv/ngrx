import { ShoppingItem } from "../models/shopping-item.model";
import { ShoppingAction, ShoppingActionTypes } from '../actions/shopping.actions';

const initialState: Array<ShoppingItem> = [
    {
        id: "1775935f-36fd-467e-a667-09f95b917f6d",
        name: 'Diet Coke'
    }
];

export function ShoppingReducer(state:Array<ShoppingItem> = initialState,action:ShoppingAction){
    switch(action.type){
        case ShoppingActionTypes.ADD_ITEM:
            console.log(action.type,action.payload);
            return [...state, action.payload];
        case ShoppingActionTypes.DELETE_ITEM:
            console.log(action.type,action.payload);
            return state.filter(item => {return item.id !== action.payload});
        default:
            return state;
    }
}