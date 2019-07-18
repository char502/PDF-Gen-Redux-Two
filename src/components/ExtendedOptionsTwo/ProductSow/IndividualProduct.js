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
    // this.handleSelectChange = this.handleSelectChange.bind(this);
    // this.dropdownOptions = this.dropdownOptions.bind(this);
  }

  handleCheckBox(e) {
    this.setState({ checked: !this.state.checked });
  }

  //   handleSelectChange(e) {
  //     this.setState({ value: e.target.value });
  //   }

  //   dropdownOptions() {
  //     return productOptions.map((selectOption) => (
  //       <option
  //         key={selectOption.productConfig}
  //         value={selectOption.productConfig}
  //       >
  //         {selectOption.productConfig}
  //       </option>
  //     ));
  //   }

  render() {
    const content = this.state.checked ? (
      <div>
        <SelectOptionComponent />

        {/* This is an input component test
        <select
          id="indivProd"
          onChange={this.handleSelectChange}
          value={this.state.value}
        >
          {this.dropdownOptions}
        </select>
        <p>Value coming from state: {this.state.value}</p> */}
        {/* <this.props.inputComponent /> */}
        {/* {this.props.children} */}
      </div>
    ) : null;
    return (
      <div>
        <div className="thumbnail.form-group">
          {/* <div>Test</div> */}
          {/* <img src={this.props.src} alt={this.props.alt} /> */}
          An Image here
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
