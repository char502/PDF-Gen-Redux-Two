import React, { Component } from "react";

// import InputComponent from "../inputComponent/inputComponent";

export default class CheckboxComponent extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  handleCheckBox(e) {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const content = this.state.checked ? (
      <div>
        <this.props.component />
        {/* {this.props.children} */}
      </div>
    ) : null;

    return (
      <div>
        <div>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleCheckBox}
          />
          <label>{this.props.label}</label>
        </div>
        {content}
      </div>
    );
  }
}
