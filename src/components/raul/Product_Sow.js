import React, { Component } from 'react';
import productOptions from "../ExtendedOptionsTwo/ProductSow/ProductOptionsList";
import IndividualProductRaul from './Individual_Product';

// Components




class ProductSowRaul extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    }
  };

  // ES6 no need to use .bind on function
  handleCheckBox = () => {
    this.setState({ checked: !this.state.checked });
  }
  
  render() {
    const prod_list = (
      <div>
        {productOptions.map(({ productName, productConfig, productImage, productImageAlt }) => {
            return (
              <IndividualProductRaul
                key={productName}
                id={productName}
                label={productName}
                options={productConfig}
                image={productImage}
                alt={productImageAlt}
              />
            )
          })}
      </div>
    )
    const { checked } = this.state;
    return (
      <div className="checkbox-group">
        <label className="checkbox-group">
          <input
            className="form-checkbox"
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleCheckBox}
          />
          Product SOW Raul
          {checked ?  prod_list : null}
        </label>
      </div>
    )
  }
}


export default  ProductSowRaul;