import React from 'react'
import { Link } from 'react-router-dom'
import user from "../images/user.jpg"

const ContactDetail = (props) => {
        return (    
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="User" /> 
                </div>
                <div className="content">
                    <div className="header">Random</div>
                    <div className="description">name@gmail.com</div>
                </div>
            </div>
            <div className="center">
                    <Link to="/"><button className="ui button blue center">Back to Contact List</button></Link>
            </div>
        </div>
)
}

export default ContactDetail