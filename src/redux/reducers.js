export const numBerOfClicksReducer = (state= 0, action)=>{
    switch(action.type){
        case 'COUNTER_BUTTON_CLICKED':
            return state + action.payload.amount
        default:
            return state
    }
}