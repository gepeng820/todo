import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import './App.css';
import TodoFooter from "./TodoFooter";
export default class App extends React.Component{
    render(){
        return (
            <div className="container" style={{marginTop:'20px'}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <panel className="panel-success">
                            <div className="panel-heading">
                                <TodoHeader/>
                            </div>
                            <div className="panel-body">
                                <TodoList/>
                            </div>
                            <div className="panel-footer">
                                <TodoFooter/>
                            </div>
                        </panel>
                    </div>
                </div>
            </div>
        )
    }
}
