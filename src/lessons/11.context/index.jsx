import React from "react";

// context ：非父子组件的数据传递
import { useState } from "react";
import Children from "./children";
// import React from "react";
// 创建context
const theme = React.createContext();
export default function Index() {
  const [info] = useState({
    naem: "黄",
    age: 10,
  });
  return (
    <div>
      {/* 一次性传入多个属性 */}
      <theme.Provider value={{ color: "red" }}>
        <Children {...info}></Children>
      </theme.Provider>
    </div>
  );
}
