import React, { Component } from 'react';
import SelectOptionComponentRaul from './Select_Option_Component';

class IndividualProductRaul extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    }
  };

  // ES6 no need for .bind
  handleCheckBox = () => {
    this.setState({ checked: !this.state.checked })
  }
  render() {
    const { id, label, options, image, alt } = this.props;
    const { checked } = this.state;
    return (
      <div className="thumbnail.form-group">
        <img src={image} alt={alt} />
        <input
          className="form-checkbox"
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleCheckBox}
        />
        {label}
        { checked ? <SelectOptionComponentRaul options={options} id={id} /> : null }
        </div>
    )
  }
}


export default IndividualProductRaul;