import React from "react";
import "./Form.css";




const Form = props => (

  <div className="form-box">
  <form className="formradio">
  
    <div className="form-group">

    <div className="buttons">

    <label className="buttons"><h3 className="button-label">One</h3><input type="checkbox" checked="" value="1"></input>
    <span className="checkmark"></span></label>

    
    <label className="buttons"><h3 className="button-label">One</h3><input type="checkbox" checked="checked" value="1"></input>
    <span className="checkmark"></span></label>

    <label className="buttons"><h3 className="button-label">One</h3><input type="checkbox" checked="checked" value="1"></input>
    <span className="checkmark"></span></label>

    <label className="buttons"><h3 className="button-label">One</h3><input type="checkbox" checked="checked" value="1"></input>
    <span className="checkmark"></span></label>

    <label className="buttons"><h3 className="button-label">One</h3><input type="checkbox" checked="checked" value="1"></input>
    <span className="checkmark"></span></label>


    
        <div>
          <button className="btn formsubmit" type="submit">Submit</button>
        </div>
    </div>
    </div>
</form>
</div>
 
);

export default Form;
