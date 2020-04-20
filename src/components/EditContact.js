import React, { Component } from "react";
import FormInput from "./FormInput";
import { connect } from "react-redux";
import { editContact } from "../actions/actionsCreators";

class EditContact extends Component {
  state = {
    toEdit: {
      name: "",
      email: "",
      phone: "",
    },
  };

  componentDidMount() {
    let contact = this.props.contacts.filter(
      (contact) => this.props.match.params.id == contact.id
    );
    this.setState({
      toEdit: {
        name: contact[0].name,
        email: contact[0].email,
        phone: contact[0].phone,
      },
    });
  }

  onSubmit = function (e) {
    e.preventDefault();
    let data = {
      id: this.props.match.params.id,
      name: e.target.Name.value,
      email: e.target.Email.value,
      phone: e.target.Phone.value,
    };

    e.target.Name.value = "";
    e.target.Email.value = "";
    e.target.Phone.value = "";

    this.props.dispatch(editContact(data));
    this.props.history.push("/");
  };

  render() {
    console.log(this.props);
    return (
      <div className="add_form">
        <form onSubmit={this.onSubmit.bind(this)}>
          <FormInput
            placeholder={"Name"}
            type={"text"}
            name={"Name"}
            value={this.state.toEdit.name}
          />
          <FormInput
            placeholder={"Email"}
            type={"email"}
            name={"Email"}
            value={this.state.toEdit.email}
          />
          <FormInput
            placeholder={"Contact Number"}
            type={"text"}
            name={"Phone"}
            value={this.state.toEdit.phone}
          />
          <input type="submit" value="Edit" />
        </form>
      </div>
    );
  }
}

let mapStateToProps = function (state) {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps)(EditContact);
