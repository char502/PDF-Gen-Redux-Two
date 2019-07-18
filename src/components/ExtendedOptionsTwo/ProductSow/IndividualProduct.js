import React, { Component } from "react";
// import productOptions from "./ProductOptionsList";
import SelectOptionComponent from "./SelectOptionComponent";

class IndividualProduct extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      value: "Select a Product Configuration"
    };
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  handleCheckBox(e) {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const content = this.state.checked ? (
      <div>
        <SelectOptionComponent options={this.props.options} />
      </div>
    ) : null;
    return (
      <div>
        <div className="thumbnail.form-group">
          {/* <img src={this.props.src} alt={this.props.alt} /> */}
          <img src={this.props.image} alt={this.props.alt} />
          <input
            className="form-checkbox"
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleCheckBox}
          />
          {this.props.label}
          {content}
        </div>
      </div>
    );
  }
}

export default IndividualProduct;
