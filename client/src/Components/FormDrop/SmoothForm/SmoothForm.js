import React from "react";
import "../AllForms.css";
import API from "../../../utils/API";

class SmoothForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: 0 }
        ;

  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
    //   alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
      console.log(this.state);

      API.smoothValue( { value: this.state.value } ).then( res => {
        console.log(res);
        if ( res.data === true  ) {
        //   alert('form drop submitted');
        }
      });

    };
  
    render() {
      return (
          <div>
        <form onSubmit={this.handleSubmit}>
            <select className="form-drop-button" value={this.state.value} onChange={this.handleChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        </div>

      );
    }
  }
  
 export default SmoothForm;



