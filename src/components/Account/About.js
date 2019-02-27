import { withRouter } from "react-router-dom";
import BasicPage from "../lib/BasicPage";
import ListErrors from "../lib/ListErrors";
import React from "react";
import { inject, observer } from "mobx-react";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import { Grid, Row, Col, Alert } from "react-bootstrap";
import RTChart from 'react-rt-chart';
import logo from './logo.jpeg'

@inject("authStore")
@withRouter
@observer
export default class About extends React.Component {
  handleCodeChange = e => this.props.authStore.setCode(e.target.value);
  handleEmailChange = e => this.props.authStore.setEmail(e.target.value);
  handleSubmitForm = e => {
    e.preventDefault();
    this.props.authStore
      .confirmCode()
      .then(() => this.props.history.replace("/login"));
  };
  componentDidMount() {
      setInterval(() => this.forceUpdate(), 1000);
  }
  render() {

    const { values, errors, inProgress } = this.props.authStore;

    return (
<BasicPage title="Water Quality Control">
<Grid>
  <Row>
    <Col xs={4} style={{backgroundcolor: 'lightblue', height:'50vh'}}>
      <h1>Information</h1>
      <p>Smart water tech can save +$12 billion annually</p>
    </Col>
    <Col xs={4}>
      <h1>Pokemon Theme Song</h1>
      <p>I wanna be the very best</p>
    </Col>
    <Col xs={4}>
      <h1>About</h1>
      <p>that no one ever was</p>
    </Col>
  </Row>
    <Button
    bsSize="large"
    bsStyle="primary"
    type="submit"
    disabled={inProgress}
    >
    Confirm
    </Button>
    <Row>
      <Col xs={8} style={{height:'50vh', backgroundcolor: 'lightblue'}}>

      </Col>
    </Row>

  </Grid>
      </BasicPage>
    );
  }
}
