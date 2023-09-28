// import  './index.module.css'
// import style from "./index.module.css";
import { Consumer } from "../index3";
// import Children from "../children";
// import React from "react";
function About() {
    // const value = useAbout(MyAbout)
  // 多层级的通信
  return (
    // <div className={style.context}>context</div>
    <Consumer>
      {(name) => (
        <div
          style={{
            border: "1px solid blue",
            width: "60%",
            margin: "20px auto",
            textAlign: "center",
          }}
        >
          <p>子组件。获取父组件的值:{name.color}
            {/* <Children></Children> */}
          </p>
        </div>
      )}
    </Consumer>
  );
}
export default About;
