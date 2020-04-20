import React, { Component } from "react";
import FormInput from "./FormInput";
import { connect } from "react-redux";
import { addContact } from "../actions/actionsCreators";
import Navigation from "./Navigation";

class Newform extends Component {
  onSubmit = function (e) {
    e.preventDefault();
    let data = {
      name: e.target.Name.value,
      email: e.target.Email.value,
      phone: e.target.Phone.value,
    };

    e.target.Name.value = "";
    e.target.Email.value = "";
    e.target.Phone.value = "";

    this.props.dispatch(addContact(data));
    this.props.history.push("/");
  };

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="add_form">
          <form onSubmit={this.onSubmit.bind(this)} autoComplete="off">
            <FormInput
              placeholder={"Name"}
              type={"text"}
              name={"Name"}
              value=""
            />
            <FormInput
              placeholder={"Email"}
              type={"email"}
              name={"Email"}
              value=""
            />
            <FormInput
              placeholder={"Contact Number"}
              type={"text"}
              name={"Phone"}
              value=""
            />
            <input type="submit" value="ADD" />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null)(Newform);
