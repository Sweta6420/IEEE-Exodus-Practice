import React from 'react'
import { Navigate } from "react-router-dom"

class EditContact extends React.Component
{   
    constructor(props)
    {
        super(props)
        const {id,name,email} = props.location.state.contact;
        this.state = {
            id,
            name,
            email,
        }
    }

    update = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email==="") {
            alert( "All fields are mandatory!");
            return;
        }
        this.props.updateContactHandler(this.state);
        this.setState({ name:"", email:"" });
        <Navigate to="/" exact={true} replace={true} />    
    }
    
    render(){
        
       return(
            <div className="ui main">
                <h2>Edit Contact</h2>
                <form className="ui form" onSubmit={this.update}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            value = {this.state.name}
                            onChange={(e) => this.setState({name: e.target.value})}>
                        </input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email"
                            value = {this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}></input>
                    </div>
                    <button className="ui button blue">Edit</button>
                </form>
            </div>
       )
    }
}

export default EditContact