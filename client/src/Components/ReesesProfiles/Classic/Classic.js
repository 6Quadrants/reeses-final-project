import React, { Component } from "react";
import API from "../../../utils/API";
import { Col} from "react-bootstrap"

class Classic extends Component {

  state = {
    reeses: []
  };

  componentDidMount() {
    this.loadReeses();
  }

  loadReeses = () => {
    API.getReeses()
      .then(res => this.setState({ reeses: res.data }))
      .catch(err => console.log(err));
    //   .catch(err => console.log(loadReeses));
      
  };

  render() {
    return (
    //   <Container fluid>
    //     <Row>
    <div>
        <div>
         
          <Col md={6}>
              <h1>Render?</h1>

            {this.state.reeses.length ? (
            <ul>
                {this.state.reeses.map(reeses => (
                  <li key={reeses._id}>
                    <a href={"/reeses/" + reeses._id}>
                      <strong>
                        {reeses.product} by {reeses.chocolate}
                      </strong>
                    </a>
                    {/* <DeleteBtn /> */}
                  </li>
                ))}
              </ul>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>

          </div>
          </div>
    
    );
  }
}

export default Classic;
