import React from "react";
import "./Form.css";




const Form = props => (

  
  <form className="formradio">
  <div className="form-group">

<div className="buttonsss">
  <fieldset>
      
          <label for="one" className="buttons"><h3 className="button-label">one</h3>
          <input type="radio" id="one" name="form" value="1"/>
          <span className="checkmark"></span></label>
   
          <label for="two" className="buttons"><h3 className="button-label">two</h3>
          <input type="radio" id="two" name="form" value="2" />
          <span className="checkmark"></span></label>
   
          <label for="three" className="buttons"><h3 className="button-label">three</h3>
          <input type="radio" id="three" name="form" value="3" />
          <span className="checkmark"></span></label>
          
          <label for="four" className="buttons"><h3 className="button-label">four</h3>
          <input type="radio" id="four" name="form" value="4" />
          <span className="checkmark"></span></label>

          <label for="five" className="buttons"><h3 className="button-label">five</h3>
          <input type="radio" id="five" name="form" value="5" />
          <span className="checkmark"></span></label>
 
  </fieldset>
  </div>
  </div>
</form>



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


    
        


 
);

export default Form;
