import * as types from '../action-types';
export default {
    addTodo(title){
        //返回一个addtodo的action
        return {type:types.ADD_TODO,title};
    },
    //改变某个todo的完成状态
    changeTodoCompleted(id){
        return {type:types.CHANGE_TODO_COMPLETED,id}
    },
    //全选和全消 selectAll=true 全选
    toggleAll(selectAll){
        return {
            type:types.TOGGLE_ALL,selectAll
        }
    },
    deleteTodo(id){
        return {type:types.DELETE_TODO,id}
    },
    delCompleted(){
        return {type:types.DEL_COMPLETED}
    }
}