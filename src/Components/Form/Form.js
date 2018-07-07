import React, { Component } from "react";
// import "./Form.css";
// import { FormGroup, FormControl, FormExample, ControlLabel, HelpBlock } from "react-bootstrap";



    
    class Form extends Component {
      // Setting the component's initial state
      state = {
        firstName: "",
        lastName: "",
        password: ""
      };
    
      handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
    
        // if (name === "password") {
        //   value = value.substring(0, 15);
        // }
        // Updating the input's state
        this.setState({
          [value]: value
        });
      };
    
      handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        // if (!this.state.firstName || !this.state.lastName) {
        //   alert("Fill out your first and last name please!");
        // } else if (this.state.password.length < 6) {
        //   alert(
        //     `Choose a more secure password ${this.state.firstName} ${this.state
        //       .lastName}`
        //   );
        // } else {
        //   alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        // }
    
        // this.setState({
        //   firstName: "",
        //   lastName: "",
        //   password: ""
        // });

        this.setState({
            valueone: 0,
            valuetwo: 0,
            valuethree: 0,
            valuefour: 0,
            valuefive: 0
        })
      };
    
      render() {
        return (
          <div>
            <p>
              Hello {this.state.firstName} {this.state.lastName}
            </p>
            <form className="form">
                    <label><p>1</p></label>
                    <input type = "radio"
                        valueone={1}
                        
                        onChange={this.handleInputChange}
                        // type="text"
                        // placeholder="First Name"
                    />
                    <label><p>2</p></label>
                    <input type = "radio"
                        valuetwo={2}
                        // name="firstName"
                        onChange={this.handleInputChange}
                        // type="text"
                        // placeholder="First Name"
                    /> 
                    <label><p>3</p></label>
                    <input type = "radio"
                        valuethree={3}
                        // name="firstName"
                        onChange={this.handleInputChange}
                        // type="text"
                        // placeholder="First Name"
                    /> 
                    <label><p>4</p></label>
                    <input type = "radio"
                        valuefour={4}
                        // name="firstName"
                        onChange={this.handleInputChange}
                        // type="text"
                        // placeholder="First Name"
                    />
                     <label><p>5</p></label>
                    <input type = "radio"
                        valuefive={5}
                        // name="firstName"
                        onChange={this.handleInputChange}
                        // type="text"
                        // placeholder="First Name"
                    />
              {/* <input
                value={this.state.lastName}
                name="lastName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Last Name"
              />
              <input
                value={this.state.password}
                name="password"
                onChange={this.handleInputChange}
                type="password"
                placeholder="Password"
              /> */}
              <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>
        );
      }
    }
    
    export default Form;




