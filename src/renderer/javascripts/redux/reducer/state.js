const initialState = {
    appName: "",
    electronVersion: "",
    nodeVersion: "",
    chromiumVersion: ""
}

export const dis_state = (state=initialState,action)=>{
    switch(action.type){
        case"UPDATE_STATE":{
            return {
                ...state,
                ...action.payload
            }
        }
        default:{
            return state
        }
    }
}