// import React from 'react'

// import { func } from "prop-types";
import { useState } from "react";
import PropTypes from "prop-types";
//高阶函数不是react的api，而是一种设计思想

export default function Index() {
  // const userinfo = { name: "黄", age: 123 };
  return (
    <div>
      {/* <Home></Home> */}
      <HomeCpn></HomeCpn>
      <ProFile></ProFile>
      <Hello></Hello>
    </div>
  );
}
// 定义组件：给一些需要特殊数据的组件，注入props
function enhenceUserinfo(Cold) {
  function newC() {
    const [Msg, setMsg] = useState({ userinfo: { name: "黄", age: 123 } });
    return <Cold {...Msg}></Cold>;
  }
  return newC;
}

function Home(props) {
	Home.propTypes = {
		userinfo: PropTypes.object,
		name: PropTypes.string
	};
  console.log(props);
  return <h1>Home {props.userinfo.name}</h1>;
}
const HomeCpn = enhenceUserinfo(Home);

function ProFile() {
  return <h1>Profile</h1>;
}
function Hello() {
  return <h1>hello friend</h1>;
}
