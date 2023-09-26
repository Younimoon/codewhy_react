// import React from 'react'

import { useState } from "react";

export default function Index() {
  const [msg, setmsg] = useState("hello word");
  const [msg1, setmsg1] = useState("Hello Word");
  const [isReady, setReady] = useState(false);
  let context;
  if (isReady) {
    context = msg;
  } else {
    context = msg1;
  }
  const changeReady = ()=>{
    setReady(!isReady)
  }
  // return <div>{context}</div>;
  // 同时可以使用三元运算法,注意：大括号里面不需要给变量再加大括号
  // return <div>{isReady ? msg : msg1}</div>;

  // 逻辑与运算符
  // 两个都必须为真才可以渲染
  // 说白了就是需要渲染的东西肯定是真的但是就是靠判断字段来决定是否显示
  return (
    <div>
      <div>{!isReady && msg}11111111</div>
      <button onClick={changeReady}>点击切换</button>
    </div>
  );
}
