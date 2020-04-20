import React, { Component } from "react";

class FormInput extends Component {
  render() {
    console.log(this.props.value);

    return (
      <React.Fragment>
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
          defaultValue={this.props.value}
          required
        />
      </React.Fragment>
    );
  }
}

export default FormInput;
