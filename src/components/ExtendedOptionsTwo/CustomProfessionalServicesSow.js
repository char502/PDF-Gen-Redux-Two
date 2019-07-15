import React, { Component } from 'react'
import InputComponent from './inputComponent/inputComponent'

export default class ChildComponent extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    onCheck = e => {
        this.setState({ show: true })
    }

    render() {
        const showYes = (
            <div>
                <InputComponent />
                <InputComponent />
                <InputComponent />
            </div>
        );
        const noShow = (
            <div>
                <input checkBox onCheck={this.onCheck} ></input>
            </div>
        )
        const { show } = this.state;

        return (
            <div>
                {show ? showYes : noShow}
            </div>
        )
    }
}
