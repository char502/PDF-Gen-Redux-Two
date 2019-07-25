import React, { Component } from "react";
import productOptions from "./ProductOptionsList";
import IndividualProduct from "./IndividualProduct";

// console.log(productOptions);
// let indivComponentId = 0
// id: indivComponentId++

class SimpleComponent extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }

  render() {
    // console.log(this.props.key);
    return (
      <div>
        {productOptions.map((product) => (
          /* <div key={i}> */

          <IndividualProduct
            key={product.productName}
            id={product.productName} // To help with identification in reducer */
            label={product.productName}
            options={product.productConfig}
            image={product.productImage}
            alt={product.productImageAlt}
          />
        ))}
      </div>

      /* <div>{this.displayProducts()}</div>; */
    );
  }
}

export default SimpleComponent;
