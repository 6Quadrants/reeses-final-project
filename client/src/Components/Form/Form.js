import React, { Component } from "react";
import "./Form.css";
import API from '../../utils/API';

class Form extends Component {
  // Setting the component's initial state
  // state = {
  //   one: 0,
  //   two: 0,
  //   three: 0,
  //   four: 0,
  //   five: 0
  // };

  state = {
    one: 0,
    two: 0,
    lastName: ""
  };

  


  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    // const { name, value } = event.target;

    const target = event.target;
    const value = target.type === 'radio' ? target.checked : target.value;
    const name = target.name;

    // Updating the input's state
    this.setState({
      [name]: value,
      
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs

    // alert(`Hello ${this.state.one} ${this.state.two} ${this.state.three} ${this.state.four} ${this.state.five}`);
    // this.setState({
    //   one: +1,
    //   two: +2,
    //   three: +3,
    //   four: +4,
    //   five: +5
    // });
    API.matchName( { lastName: this.state.lastName } ).then( res => {
      console.log(res);
      if ( res.data === true  ) {
        alert('last name submitted');
      }
    });

    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      one: +1,
      two: +2,
      lastName: ""
    });





  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (

      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value= "one"
            checked = {this.state.selectedOption === 'one'}
            name="one"
            onChange={this.handleInputChange}
            type="radio"
            placeholder="one"
            id="one"
          />
          <input
          value="two"
          checked = {this.state.selectedOption === 'two'}
          name="one"
          onChange={this.handleInputChange}
          type="radio"
          checked = {this.state.two}
          placeholder="one"
          id="two"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>

      
    );
  }
}

export default Form;








// import React from "react";
// import "./Form.css";




// const Form = props => (

  
//   <form className="formradio">
//   <div className="form-group">

// <div className="buttonsss">
//   <fieldset>
      
//           <label for="one" className="buttons"><h3 className="button-label">one</h3>
//           <input type="radio" id="one" name="form" value="1"/>
//           <span className="checkmark"></span></label>
   
//           <label for="two" className="buttons"><h3 className="button-label">two</h3>
//           <input type="radio" id="two" name="form" value="2" />
//           <span className="checkmark"></span></label>
   
//           <label for="three" className="buttons"><h3 className="button-label">three</h3>
//           <input type="radio" id="three" name="form" value="3" />
//           <span className="checkmark"></span></label>
          
//           <label for="four" className="buttons"><h3 className="button-label">four</h3>
//           <input type="radio" id="four" name="form" value="4" />
//           <span className="checkmark"></span></label>

//           <label for="five" className="buttons"><h3 className="button-label">five</h3>
//           <input type="radio" id="five" name="form" value="5" />
//           <span className="checkmark"></span></label>
 
//   </fieldset>
//   </div>
//   </div>
// </form>



  // <div className="form-box">
  // <form className="formradio">
  
  //   <div className="form-group">

  //   <div className="buttons">

    
    

  // </div>
  // </div>
  // </form>
  // <div>
  
  //         <button className="btn formsubmit" type="submit">Submit</button>
  //       </div>
  //       </div>



    /* <label className="buttons">
    <h3 className="button-label">One</h3>
    <input type="radio"  value="1"></input>
    <span className="checkmark">
    </span></label>

    
    <label className="buttons"><h3 className="button-label">Two</h3><input type="radio" value="2"></input>
    <span className="checkmark"></span></label>

    <label className="buttons"><h3 className="button-label">Three</h3><input type="radio" value="3"></input>
    <span className="checkmark"></span></label>

    <label className="buttons"><h3 className="button-label">Four</h3><input type="radio"  value="4"></input>
    <span className="checkmark"></span></label>

    <label className="buttons"><h3 className="button-label">Five</h3><input type="radio"  value="5"></input>
    <span className="checkmark"></span></label> */


    
        


 
// );

// export default Form;
