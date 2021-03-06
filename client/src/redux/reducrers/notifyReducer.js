import {TYPES} from '../actions/authAction'

const initialState={}

const notifyReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.AUTH:
            return action.payload;
        default:
            return state;
    }
}

export default notifyReducer
