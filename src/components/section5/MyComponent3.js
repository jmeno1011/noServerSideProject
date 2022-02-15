// 화살표 문법 확인 
import React from 'react'

function MyComponent3(props) {
  return (
    <div>
        안녕하세요, 제 이름은 {props.name}입니다.<br />
        children 값은 {props.children} 입니다.
    </div>
  )
}

export default MyComponent3

MyComponent3.defaultProps = {
    name: "기본 이름",
  };
  