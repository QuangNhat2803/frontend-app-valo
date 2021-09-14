import {postDataAPI} from '../../utils/fetchData'

export const TYPES = {
    AUTH: ' AUTH'
}

export const login = (data) => async (dispatch) =>{
    try {
        dispatch({type:'NOTYFY', payload: {loading:true} })
        const res = await postDataAPI('login', data)
        console.log(res)
    } catch (er) {
        
    }
}