import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
export default class App extends React.Component{
    render(){
        return (
            <div className="container" style={{marginTop:'20px'}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <panel className="panel-success">
                            <div className="panel-heading">1</div>
                            <div className="panel-body">1</div>
                            <div className="panel-footer">1</div>
                        </panel>
                    </div>
                </div>
            </div>
        )
    }
}
