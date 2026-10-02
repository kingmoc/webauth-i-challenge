import {
    FETCH_DATA_START
} from '../store/actions'


const initialState = {

    users: [],
 
}




export const dashboardReducder = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_DATA_START:
            return {
                ...state, 
                fetchingSmurfs: true,
                error: false
            }

        // case FETCH_DATA_SUCCESS:
        //     return {
        //         ...state,
        //         fetchingSmurfs: false,
        //         smurfs: action.payload
        //     }

        // case FETCH_DATA_FAIL:
        //     return {
        //         ...state,
        //         error: true,
        //     }

        // case ADD_SMURF_START:
        //     return {
        //         ...state, 
        //         addingSmurf: true,
        //         error: false
        //     }

        // case ADD_SMURF_SUCCESS:
        //     console.log(action.payload)
        //     return {
        //         ...state, 
        //         smurfs: action.payload,
        //         addingSmurf: false,
        //         error: false
        //     }

        // case ADD_SMURF_FAIL:
        //     return {
        //         ...state, 
        //         error: true
        //     }
    
        default:
            return state
    }

}