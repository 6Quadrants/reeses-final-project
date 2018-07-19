import React, { Component } from "react";
import "./Form.css";

class Form extends Component {


  render() {
    return (

      <form className="formradio">
 <div className="form-group">

 <div className="buttonsss">
    <label className="buttons"><h3 className="button-label">Two</h3><input type="radio" value="2"></input>
    <span className="checkmark"></span></label>

    <label className="buttons"><h3 className="button-label">Three</h3><input type="radio" value="3"></input>
    <span className="checkmark"></span></label>

    <label className="buttons"><h3 className="button-label">Four</h3><input type="radio"  value="4"></input>
    <span className="checkmark"></span></label>

    <label className="buttons"><h3 className="button-label">Five</h3><input type="radio"  value="5"></input>
    <span className="checkmark"></span></label> 

</div>
</div>
    </form>



      
    );
  }
}

export default Form;

