import * as types from '../action-types';
//过滤器的内容有三种 all active complete
let initState = 'all';
export default function (state=initState, action) {
    switch (action.type){
        //
        case types.CHANGE_FILTER:
            return action.filter;//指的是新的过滤类型
        default:
            return state;
    }
}