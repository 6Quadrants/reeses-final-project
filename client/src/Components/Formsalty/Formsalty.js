import React, { Component } from "react";
import "./Formsalty.css";

class Formsalty extends Component {
  // Setting the component's initial state
  state = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // alert(`Hello ${this.state.one} ${this.state.two} ${this.state.three} ${this.state.four} ${this.state.five}`);
    this.setState({
      one: +1,
      two: +2,
      three: +3,
      four: +4,
      five: +5
    });
  };

render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (

<form className="formradio">
<div className="form-group">

<div className="buttonsss"> 
    <fieldset>
      
    <label for="one" className="buttons">
    <h3 className="button-label">one</h3>
    <input 
        value={this.state.value}
        type="radio" 
        id="one" 
        name="one"
        onChange={this.handleInputChange} 
        />
        <span className="checkmark"></span>
    </label>
    <label for="two" className="buttons">
    <h3 className="button-label">two</h3>
    <input 
        value={this.state.value}
        type="radio" 
        id="two" 
        name="two"
        onChange={this.handleInputChange} 
        />
        <span className="checkmark"></span>
    </label>
    <label for="three" className="buttons">
    <h3 className="button-label">three</h3>
    <input 
        value={this.state.value}
        type="radio" 
        id="three" 
        name="three"
        onChange={this.handleInputChange} 
        />
        <span className="checkmark"></span>
    </label>
    <label for="four" className="buttons">
    <h3 className="button-label">four</h3>
    <input 
        value={this.state.value}
        type="radio" 
        id="four" 
        name="four"
        onChange={this.handleInputChange} 
        />
        <span className="checkmark"></span>
    </label>
    <label for="five" className="buttons">
    <h3 className="button-label">five</h3>
    <input 
        value={this.state.value}
        type="radio" 
        id="five" 
        name="five"
        onChange={this.handleInputChange} 
        />
        <span className="checkmark"></span>
    </label>
 </fieldset>
</div>
</div> 
 </form>
      
    );
}
}


export default Formsalty;

