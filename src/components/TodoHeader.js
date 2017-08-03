import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import todoActions from '../store/actions/todos';
class TodoHeader extends Component{
    handleKeyDown = (event)=>{
        let keyCode = event.keyCode;
        if(keyCode === 13 && event.target.value){
            let title=event.target.value;
            this.props.addTodo(title);
            event.target.value='';
        }
    };
    render(){
        return(
            <input onKeyDown={this.handleKeyDown} type="text" className="form-control"/>
        )
    }
}
let mapStateToProps = state =>({});
let mapDisPatchToProps = dispatch =>(bindActionCreators(todoActions,dispatch));

export default connect(mapStateToProps,mapDisPatchToProps)(TodoHeader)