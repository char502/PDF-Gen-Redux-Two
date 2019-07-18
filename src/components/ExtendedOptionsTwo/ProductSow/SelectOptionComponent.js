import React, { Component } from "react";
import productOptions from "./ProductOptionsList";

class SelectOptionComponent extends Component {
  constructor() {
    super();
    this.state = {
      value: "Select a Product Configuration"
    };

    this.dropdownOptions = this.dropdownOptions.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(e) {
    this.setState({ value: e.target.value });
  }

  dropdownOptions() {
    const { options } = this.props;

    return options.map((configOpt) => (
      <option key={configOpt} value={configOpt}>
        {configOpt}
      </option>
    ));
  }

  render() {
    return (
      <div>
        <select
          /* id="indivProd" */
          onChange={this.handleSelectChange}
          value={this.state.value}
        >
          {this.dropdownOptions()}
        </select>
        <p>Value coming from state: {this.state.value}</p>
      </div>
    );
  }
}

export default SelectOptionComponent;
