import React from "react";

class Hello extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello 2</h1>
                {this.props.children}
            </div>
        )
    }
}
 

export default Hello;