import React from "react";
import PropTypes from "prop-types";

// PropTypes을 이용한 타입 지정
function MyComponent6({ name, children }) {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      children 값은 {children} 입니다.
    </div>
  );
}

MyComponent6.defaultProps = {
  name: "기본 이름",
};

MyComponent6.propTypes = {
  name: PropTypes.string,
};
export default MyComponent6;
