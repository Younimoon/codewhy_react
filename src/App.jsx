import Learn_jsx from "./lessons/01_jsx的学习";
import "./App.css";
// import Index from "./lessons/02事件传参";
// import Index from "./lessons/03_条件渲染";
// import Index from "./lessons/04_列表渲染";
// import Index from "./lessons/05_jsx的转化";
// import Index from "./lessons/06_练习";
// import Index from "./lessons/07_传参定义";
// import Index from "./lessons/08_子传父";
// import Index from "./lessons/09_练习2";
// import Index from "./lessons/09_练习1-子传父";
// import Index from "./lessons/10_插槽";
// import Index from "./lessons/11.context";
// import Index from "./lessons/12_跨级的事件传递";
// import Index from "./lessons/13_为何使用usestate";
import Index from "./lessons/14_受控组件和非受控组件";


// import { useState } from "react";
function App() {
  // const [count, setcount] = useState(0);
  // 5个dom节点
  return (
    <>
      <Learn_jsx></Learn_jsx>
      {/* {count} */}
      {/* <Index
        leftSolt={<button>123</button>}
        center={(item)=> <button>{item}</button>}
        // addClick={(data) => {
        //   setcount((n) => n + data);
        // }}
      >
        <button>按钮</button>
        <h2>我是标签</h2>
        </Index> */}
        <Index></Index>
        
    </>
  );
}

export default App;
