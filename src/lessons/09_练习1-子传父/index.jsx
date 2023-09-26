// import React from 'react'
import Header from "./header";
import { useState } from "react";
export default function Index() {
  const [title, settitle] = useState("流行");
  const changeHeader2 = (item) => {
    console.log(item);
    // console.log(index);
    settitle((n) => {
      n = item;
      return n;
    });
  };

  return (
    <div>
      <Header
        // 写不写都能进行传递
        // changeHeader={(data)=>changeHeader2(data)}
        changeHeader={changeHeader2}
      ></Header>
      <h2>{title}</h2>
    </div>
  );
}
