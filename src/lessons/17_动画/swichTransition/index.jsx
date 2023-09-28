// import React, { useState } from 'react'
import "./index.css";
import { useState , useRef} from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
export default function Index() {
  const [islogin, setisLogin] = useState(false);
  const nodeRef = useRef();
  return (
    <div>
      {/* out-in:新组件先进入，旧组件再移除 */}
      {/* out-in:旧组件先移除，新组建在进入 */}
      <SwitchTransition mode="out-in">
        <CSSTransition
          nodeRef={nodeRef}
          key={islogin ? "exit" :"login"}
          classNames="login"
          timeout={2000}
        >
          <button ref={nodeRef} onClick={() => setisLogin(!islogin)}>
            {islogin ? "退出" : "登录"}
          </button>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
