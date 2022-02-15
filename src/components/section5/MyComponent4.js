import React from 'react'

function MyComponent4(props) {
  // 비구조화 할당
  const {name, children} = props;
  return (
    <div>
        안녕하세요, 제 이름은 {name}입니다.<br />
        children 값은 {children} 입니다.
    </div>
  )
}

export default MyComponent4

MyComponent4.defaultProps = {
    name: "기본 이름",
  };
  