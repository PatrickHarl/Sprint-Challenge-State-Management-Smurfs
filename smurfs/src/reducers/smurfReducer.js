import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS } from '../actions/allActions'

const initialState = {

    isFetching:false,
    smurfs: [],
    error:''

}


export const smurfReducer = (state=initialState, action) => {



    switch(action.type) {
        case FETCH_SMURFS_START:
            return {

                ...state,
                isFetching: true

            }
        case FETCH_SMURFS_SUCCESS:
            return {

                ...state,
                isFetching: false,
                smurfs: action.payload

            }
        default:
            return state

    }

}
