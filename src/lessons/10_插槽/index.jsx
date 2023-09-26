// import React from 'react'
import PropTypes from "prop-types";
// 插槽
// 1 通过组件的children，只有一个children，直接为props的属性，有多个children就是以数组的形式存在
// 2 通过props传递
import "./index.css";
export default function Index(props) {
  const solt = "我是作用域插槽";
  Index.propTypes = {
    children: PropTypes.array,
    leftSolt: PropTypes.string,
    center: PropTypes.string,
  };
  return (
    <div className="box">
      <div className="left">{props.children[0]}</div>
      <div className="center">center</div>
      <div className="right">right</div>
      <div>{props.leftSolt}</div>
      {/* // 作用域插槽,子组件自定义部分数据,传递一个函数 */}
      <div>{props.center(solt)}</div>
    </div>
  );
}
