import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { product_sow } from '../../redux/actions/product_sow';

class SelectOptionComponentRaul extends Component {
  constructor() {
    super();
    this.state = {
      configOption: ""
    }
  }

  // ES6 no need to use .bind
  // Update state with the select option
  onChange = e => {
    this.setState({ configOption: e.target.value })
  }

  // if component state change update redux state
  componentDidUpdate(prevProps, prevState) {
    const { configOption } = this.state;
    const { id } = this.props;
    // build 1 obj to contain all data;
    const data = { id, configOption }

    if(configOption !== prevState.configOption) {
      // Send data to redux
      this.props.product_sow(data);
    }
  }

  render() {
    const { id, options } = this.props;
    const option = options.map(i => <option key={i} value={i}>{i}</option>)

    return (
      <div>
        <select onChange={this.onChange}>
          {option}
        </select>
        <p>Id: {id}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, { product_sow })(SelectOptionComponentRaul);