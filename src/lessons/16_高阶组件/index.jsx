// import React from 'react'

// import { render } from "react-dom"

export default function Index() {
  return (
    <div>
      <NewHoc />
    </div>
  );
}
// 高阶组件  hoc ： 参数是组件，返回值为新组件的函数

// 这里返回一个函数
function hoc(Cpn) {
  // 定义一个函数组件
  function NewCpn() {
    return <Cpn></Cpn>;
  }
  // console.log(NewCpn());
  return NewCpn;
}

function Hello() {
  return <div>Hello Word</div>;
}
const NewHoc = hoc(Hello);
