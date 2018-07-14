import React, { Component } from "react";
import "./FormChewy.css";

class FormChewy extends Component {
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
    alert(`Hello ${this.state.one} ${this.state.two} ${this.state.three} ${this.state.four} ${this.state.five}`);
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

        <form className="form">
        <input
          value={this.state.value}
          name="one"
          onChange={this.handleInputChange}
          type="radio"
          placeholder="one"
          id="1"
        />
        <input
          value={this.state.value}
          name="two"
          onChange={this.handleInputChange}
          type="radio"
          placeholder="two"
          id="2"
        />
         <input
          value={this.state.value}
          name="three"
          onChange={this.handleInputChange}
          type="radio"
          placeholder="three"
          id="3"
        />
        <input
            value={this.state.value}
            name="four"
            onChange={this.handleInputChange}
            type="radio"
            placeholder="four"
            id="4"
          />
           <input
            value={this.state.value}
            name="five"
            onChange={this.handleInputChange}
            type="radio"
            placeholder="five"
            id="5"
          />
            <button onClick={this.handleFormSubmit}>Submit</button>
        </form>





/* <form className="formradio">
<div className="form-group">

<div className="buttonsss"> 
    <fieldset>
      
    <label for="one" className="buttons">
    <h3 className="button-label">one</h3>
    <input 
        value={this.state.value}
        type="radio" 
        id="1" 
        name="form"
        onChange={this.handleInputChange} 
        />
        <span className="checkmark"></span>
    </label>
    <label for="two" className="buttons">
    <h3 className="button-label">two</h3>
    <input 
        value={this.state.value}
        type="radio" 
        id="3" 
        name="form"
        onChange={this.handleInputChange} 
        />
        <span className="checkmark"></span>
    </label>
    <label for="three" className="buttons">
    <h3 className="button-label">three</h3>
    <input 
        value={this.state.value}
        type="radio" 
        id="3" 
        name="form"
        onChange={this.handleInputChange} 
        />
        <span className="checkmark"></span>
    </label>
    <label for="four" className="buttons">
    <h3 className="button-label">four</h3>
    <input 
        value={this.state.value}
        type="radio" 
        id="4" 
        name="form"
        onChange={this.handleInputChange} 
        />
        <span className="checkmark"></span>
    </label>
    <label for="five" className="buttons">
    <h3 className="button-label">five</h3>
    <input 
        value={this.state.value}
        type="radio" 
        id="5" 
        name="form"
        onChange={this.handleInputChange} 
        />
        <span className="checkmark"></span>
    </label>
    <button onClick={this.handleFormSubmit}>Submit</button>
 </fieldset>
</div>
</div> 
 </form> */
      
    );
}
}


export default FormChewy;

