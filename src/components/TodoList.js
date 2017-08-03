import React,{Component} from 'react';
import {connect} from 'react-redux';
import todoActions from '../store/actions/todos';
import {bindActionCreators} from 'redux'
/*
*  1增加一个动作类型 action-types.js
*  2增加一个action todo点js
*  3为reducer添加一个case
*  4在组件里事件发生的时候调用action方法
*
* */
class TodoList extends Component{

    //1.得到要切换状态的todo 2.发射切换状态的action
    handleChange = (id)=>{
        this.props.changeTodoCompleted(id);

    };
    render(){
        let selectAll =<li className="list-group-item" key={-1}>
            <input type="checkbox"
                   checked={this.props.activeCount === 0}
                   onChange={(event)=>this.props.toggleAll(event.target.checked)}/>
            {this.props.activeCount === 0?'全部取消':'全部选中'}
        </li>;
        return(
            <ul className="list-group">
                {
                  this.props.list.length>0?selectAll:null
                }

                {
                    this.props.list.map((todo,index)=>(
                        <li key={index} className="list-group-item">
                            <input type="checkbox"
                                   onChange={()=>this.handleChange(todo.id)}
                                   checked={todo.completed}/>
                            <span style={{textDecoration:todo.completed?'line-through':''}}>{todo.title}</span>
                            <button onClick={()=>this.props.deleteTodo(todo.id)} className="btn btn-danger btn-sm pull-right">删除</button>
                            </li>
                    ))
                }
            </ul>
        )
    }
}
let mapStateToProps = state =>({
    list:state.todos.list.filter(item=>{
        switch (state.filter){
            case 'active':
                return !item.completed;
            case 'completed':
                return item.completed;
            default:
                return true;
        }
    })
});
let mapDispatchToProps = dispatch =>bindActionCreators(todoActions,dispatch);
export default connect(
    mapStateToProps,mapDispatchToProps

)(TodoList);