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
            {
              /* return <div key={i}>{product.product}</div>; */
            }
            return (
              <div key={i}>
                <IndividualProduct label={product.product} />
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
