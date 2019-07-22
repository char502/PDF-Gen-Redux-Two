import React, { Component } from "react";
import productOptions from "./ProductOptionsList";
import IndividualProduct from "./IndividualProduct";

// console.log(productOptions);

class SimpleComponent extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }

  // const productToDisplay = productOptions.map((product) => {
  //   <IndividualProduct key={product.id.toString()} value={product} />;
  // });
  // displayProducts = () => {
  //   return productOptions.map((prod, i) => {
  //     // console.log(prod.product);
  //     {
  //       <IndividualProduct
  //         label="prod.product"
  //         /* src=""
  //       alt="" */
  //       />;
  //     }
  //   });
  // };

  render() {
    return (
      <div>
        <ul>
          {productOptions.map((product, i) => {
            return (
              <div key={i}>
                <IndividualProduct
                  id={product.productId} // To help with reducer
                  label={product.productName}
                  options={product.productConfig}
                  image={product.productImage}
                  alt={product.productImageAlt}
                />
              </div>
            );
          })}
        </ul>
      </div>

      /* <div>{this.displayProducts()}</div>; */
    );
  }
}

export default SimpleComponent;