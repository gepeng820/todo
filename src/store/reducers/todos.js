import * as types from '../action-types'

let initState = {list:[]};

export default function (state=initState,action) {
    switch (action.type){
        case types.ADD_TODO://如果增加todo的话
            return {list:[...state.list,{
                id:Date.now(),completed:false,title:action.title
            }]};
        case types.CHANGE_TODO_COMPLETED:
            return {
                list:state.list.map(item=>{
                    if(item.id === action.id){
                        item.completed = !item.completed;
                    }
                    return item;
                })};
        case types.TOGGLE_ALL:
            return{
                list:state.list.map(item=>{
                    item.completed = action.selectAll
                    return item;
                })};
        case types.DELETE_TODO:
            return{
                list:state.list.filter(item=> item.id !== action.id)
            };
        case types.DEL_COMPLETED:
            return{
                list:state.list.filter(item=> !item.completed)
            };
        default:
            return state;
    }
}