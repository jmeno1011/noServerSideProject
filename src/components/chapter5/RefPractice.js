import React, { Component } from 'react'
import { ContentTitle } from '../chapter3/titleLink';
import Title from '../Title';

export default class RefPractice extends Component {
    input = React.createRef();
    handleFocus = ()=>{
        this.input.current.focus();
    }

  render() {
    return (
      <div>
        <Title Component={ContentTitle} id={"RefPrac2"} />
          <input ref={this.input} />
      </div>
    )
  }
}
