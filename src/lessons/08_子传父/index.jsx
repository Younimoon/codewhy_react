// import React from "react";
import PropTypes from "prop-types";

export default function Index(props) {
  Index.propTypes= {
    addClick:PropTypes.function 
  }
  
  const { addClick } = props;
  // 通过props传递，只不过这里是传入一个回调函数，
  // 子传父
  // 父组件中定义一个函数，通过传递属性的方式传递给子组件
  // 子组件接受到该属性，就相当于一个自己的函数调用，调用是可以进行传参
  function changenum(count) {
    addClick(count);
  }
  return (
    <div>
      <button onClick={() => changenum(1)}>+1</button>
      <button onClick={() => changenum(5)}>+5</button>
      <button onClick={() => changenum(10)}>+10 </button>
      <button onClick={() => changenum(-1)}>-1</button>
      <button onClick={() => changenum(-5)}>-5</button>
      <button onClick={() => changenum(-10)}>-10 </button>
    </div>
  );
}
