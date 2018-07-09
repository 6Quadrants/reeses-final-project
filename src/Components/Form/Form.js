import React from "react";
import "./Form.css";




// Using the datalist element we can create autofill suggestions based on the props.breeds array
const Form = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="chewiness">Chewiness</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="chewiness"
        type="text"
        className="form-control"
        placeholder="type, bitch"
        id="chewiness"
      />
      {/* <datalist id="chewiness">
        {props.breeds.map(breed => <option value={breed} key={breed} />)}
      </datalist> */}
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button>
    </div>
  </form>
);

export default Form;
