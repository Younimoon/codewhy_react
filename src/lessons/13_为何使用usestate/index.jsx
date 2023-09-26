// import React from 'react'
// setstate章节没有看
import { useState } from "react";

export default function Index() {
  let [count, setcount] = useState(0);
  //   let count1 = 0;
  const changeCount = () => {
    console.log(count);
    console.log("复发了");
    //   count1++
    // setcount(count + 1);
    // setcount(count + 1);
    // 异步操作
    setcount((count) => {
      count++;
      return count;
    });
    setcount((count) => {
      count++;
      return count;
    });
    console.log(count);
  };
  console.log("我被执行了");
  return (
    <div>
      Index{count}
      <button onClick={changeCount}>点击</button>
    </div>
  );
}
