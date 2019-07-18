import React, { Component } from "react";
import productOptions from "./ProductOptionsList";

/* <option key={i} value={selectedOption.productConfig}>
        {selectedOption.productConfig}
    </option> */
// finalList = eachArr.map((config) => {
//     config[i]
// })

// return finalList

let eachArr, finalList;

const result = productOptions.map(
  (eachArr = (selectedOption, i) => {
    return selectedOption.productConfig;
  })
);
console.log(result);

console.log(Object.keys(productOptions[2]));

// console.log(productOptions[0].productConfig[1]);

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
    return productOptions.map((selectedOption, i) => (
      <option key={i} value={selectedOption.productConfig}>
        {selectedOption.productConfig}
      </option>
    ));
  }

  render() {
    return (
      <div>
        <select
          id="indivProd"
          onChange={this.handleSelectChange}
          value={this.state.value}
        >
          {this.dropdownOptions}
        </select>
        <p>Value coming from state: {this.state.value}</p>
      </div>
    );
  }
}

export default SelectOptionComponent;

// class SelectOptionComponent extends Component {
//     constructor() {
//         super();
//         this.state = {
//             checked: false,
//             value: "Select a Product Configuration"
//         };
//         this.handleCheckBox = this.handleCheckBox.bind(this);
//         this.handleSelectChange = this.handleSelectChange.bind(this);
//     }

// dropdownOptions() {
//     return productOptions.map((selectOption) => (
//         <option
//             key={selectOption.productConfig}
//             value={selectOption.productConfig}
//         >
//             {selectOption.productConfig}
//         </option>
//     ));
// }

//     render() {
//         return (

// This is an input component test
//     < select
// id = "indivProd"
// onChange = { this.handleSelectChange }
// value = { this.state.value }
//     >
//     { this.dropdownOptions }
//         </select >
//     <p>Value coming from state: {this.state.value}</p>

// )
// }

// export default IndividualProduct;
