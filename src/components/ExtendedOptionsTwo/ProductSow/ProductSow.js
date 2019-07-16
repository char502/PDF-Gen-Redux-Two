import React, { Component } from "react";
import SimpleProductComponent from "./SimpleProductComponent";
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
        <SimpleProductComponent />
      </div>
    ) : null;

    return (
      <div>
        <div className="checkbox-group">
          <label className="checkbox-group">
            <input
              className="form-checkbox"
              type="checkbox"
              checked={this.state.checked}
              onChange={this.handleCheckBox}
            />
            Product SOW
          </label>
        </div>
        {content}
      </div>
    );
  }
}

export default ProductSow;

// import React, { Component } from "react";
// import CheckboxComponent from "../common/CheckboxComponent";
// import SimpleProductComponent from "./SimpleProductComponent";

// const ProductSow = () => {
//   return (
//     <div>
//       <CheckboxComponent
//         label="Product SOW"
//         component={SimpleProductComponent}
//       />
//     </div>
//   );
// };

// export default ProductSow;

///////////////////////////////////////////////////////////////////

// export default ProductSow;

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
