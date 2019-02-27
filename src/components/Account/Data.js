import { withRouter } from "react-router-dom";
import BasicPage from "../lib/BasicPage";
import ListErrors from "../lib/ListErrors";
import React from "react";
import { inject, observer } from "mobx-react";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import RTChart from 'react-rt-chart';

@inject("authStore")
@withRouter
@observer
export default class Data extends React.Component {
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
    var data1 = {
     date: new Date(),
     Car: 80,
     Bus: 90,
  };
    var data = {
     date: new Date(),
     DO: 23,
     PH: 12,
     Turbity: 10,
     Temperature: 15,
     Conductivity: 11,
   };
   var flow = {
              duration: 600,
   };
    const { values, errors, inProgress } = this.props.authStore;

    return (
      <BasicPage title="Hi">
      <RTChart
            fields={['Car','Bus']}
            data={data1} />
      <RTChart
      flow={flow}
            fields={['DO','PH', 'Turbity', 'Temperature', 'Conductivity']}
            data={data} />

        <p>Check your email for a confirmation code.</p>

        <ListErrors errors={errors} />

        <form onSubmit={this.handleSubmitForm}>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="nAMe"
              value={values.name}
              onChange={this.handleNameChange}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="CodE"
              onChange={this.handleCodeChange}
            />
          </FormGroup>

          <Button
            bsSize="large"
            bsStyle="primary"
            type="submit"
            disabled={inProgress}
          >
            Confirm
          </Button>
        </form>
      </BasicPage>
    );
  }
}
