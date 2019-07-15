import React, { Component } from 'react'

class ChildComponent extends Component {
    state = {
        show: false
    }
   
   onChange = e => {
       this.setState({ show: true })
   } 

   render() {
       const list = (
           <div>
            <lISTcOMPONENT />
           </div>
       )
       const { show } = this.state;
        return (
            <div>
                <img />
                text
                <checkBox onChange={this.onChange} />
                {show ? list : <div></div>}
            </div>
        )
    }
}

export default connect