import React from 'react'

// 비구조화 할당
function MyComponent5({name, children}) {
  return (
    <div>
        안녕하세요, 제 이름은 {name}입니다.<br />
        children 값은 {children} 입니다.
    </div>
  )
}

export default MyComponent5

MyComponent5.defaultProps = {
    name: "기본 이름",
  };
  