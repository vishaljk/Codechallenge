function createmeasure(state={},action){
    switch(action.type){
        case 'CREATE_MEASURE':
        let newstate=Object.assign({},state,{measure:action.measure});
        return newstate;
        default:
        return state
    }
}
export default createmeasure;