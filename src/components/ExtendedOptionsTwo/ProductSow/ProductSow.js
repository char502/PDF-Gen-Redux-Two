import React, { Component } from "react";
import SimpleComponent from "./SimpleComponent";
// import InputComponent from "../inputComponent/inputComponent";

class ProductSow extends Component {
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
        <SimpleComponent />
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
          <label>Product SOW</label>
        </div>
        {content}
      </div>
    );
  }
}

export default ProductSow;

// const showYes = (
//   <div>
//     <SimpleComponent
//     />
//     {/* <InputComponent /> */}
//     {/* <InputComponent />
//     <InputComponent /> */}
//   </div>
// );
// const noShow = (
//   <div>
//     <input
//       type="checkbox"
//       checked={this.state.checked}
//       onChange={this.handleCheckBox}
//     ></input>
//     Product SOW
//   </div>
// );
// const { checked } = this.state;
