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
        <div className="checkbox-group">
          <label>
            <input
              className="form-checkbox"
              type="checkbox"
              checked={this.state.checked}
              onChange={this.handleCheckBox}
            />
            {this.props.label}
            {content}
          </label>
        </div>
      </div>
    );
  }
}
