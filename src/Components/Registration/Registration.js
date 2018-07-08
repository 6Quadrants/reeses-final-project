import React from "react";
import "./Registration.css";
import {Col, Button, Image } from "react-bootstrap";


const Registration = props => (
    <div className="container-fluid wrapper">
        <div className="container innerwrapper">
        <div className="row">
            <div className="textintro">
                <h1 className="hello">Hello and Welcome</h1>
            </div>
            <div className="register">

                <form className="email">
                    <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                        value={props.email}
                        onChange={props.handleInputChange}
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="type yer email, bitch"
                        id="email"
                    />
                     <label htmlFor="name">Your Name</label>
                        <input
                        value={props.name}
                        onChange={props.handleInputChange}
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="type yer name, bitch"
                        id="name"
                    />
                      <label htmlFor="password">Your Password</label>
                        <input
                        value={props.password}
                        onChange={props.handleInputChange}
                        name="password"
                        type="text"
                        className="form-control"
                        placeholder="type yer password, bitch"
                        id="password"
                    />
                   
                    <button
                        type="submit"
                        onClick={props.handleFormSubmit}
                        className="btn btn-success"
                    >
                        
                    </button>
                    </div>
                </form>
            </div>

        </div>
        </div>
    </div>


)

export default Registration;