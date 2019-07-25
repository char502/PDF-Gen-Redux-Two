import React, { Component } from "react";
// import productOptions from "./ProductOptionsList";
import SelectOptionComponent from "./SelectOptionComponent";

class IndividualProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  handleCheckBox(e) {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    // console.log(this.props);
    const content = this.state.checked ? (
      <div>
        <SelectOptionComponent
          options={this.props.options}
          id={this.props.id}
          key={this.props.key}
        />
      </div>
    ) : null;
    return (
      <div>
        <div className="thumbnail.form-group">
          {/* <img src={this.props.src} alt={this.props.alt} /> */}
          <img src={this.props.image} alt={this.props.alt} />
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
