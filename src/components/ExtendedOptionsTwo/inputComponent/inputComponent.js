import React, { Component } from 'react'


//Redux
import { connect } from "react-redux";
// import { sendToRedux } from '../redux/actions/sendToRedux'
import { sendToRedux } from '../../../redux/actions/sendToRedux'
// import sendToRedux from './'

class ListConmponent extends Component {
    state = {
        list: ''
    }

    onChange = e => {
        this.props.sendToRedux(this.state.list)
    }

    render() {
        const { show } = this.state;
        return (
            <div>
                <option onChange={this.onChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </option>
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { sendToRedux })(ListConmponent);