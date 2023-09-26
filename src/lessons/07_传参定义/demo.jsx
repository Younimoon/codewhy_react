// import React from 'react'
import PropTypes from "prop-types";
function Demo({ arr, title ,name}) {
  return <div>{arr}{name}</div>;
}

// 会报错但是会编译成功
// 类型校验
Demo.propTypes = {
  name: PropTypes.string.isRequired,
  arr:PropTypes.array
};
// 传参默认值
Demo.defaultProps= {
    name:"我是默认值",
    arr:[121312]
}

export default Demo;
