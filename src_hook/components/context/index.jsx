// import  './index.module.css'
// import style from "./index.module.css";
import { Consumer } from "../../App";
import Children from "../children";
import React from "react";
function Context() {
    // const value = useContext(MyContext)
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
          <p>子组件。获取父组件的值:{name.name}
            <Children></Children>
          </p>
        </div>
      )}
    </Consumer>
  );
}
export default Context;
