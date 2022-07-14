import React,{useState} from 'react'

class ClassState extends React.Component{
    constructor(){
        super();
        this.state={
            data:"hello"
        }
    }
     apple()
     {
        this.setState({data:this.state.data="Hi"})
     }

    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.apple()}>Update</button>
            </div>
        );
    }
}
export default ClassState;