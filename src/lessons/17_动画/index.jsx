// import React from 'react'

import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.css";
export default function Index() {
  const [isshow, setisshow] = useState(true);
  const changeShow = () => {
    // isshow(!)
    setisshow(!isshow);
  };
  const nodeRef = useRef()
  return (
    <div>
      <button onClick={changeShow}>切换</button>
      {/* 下面的属性必须拥有否则报错 */}
      {/* appear属性：页面加载进入就想有动画必须加上appear属性并且在css中设置单独的样式 */}
      {/* 进入可以监听结束也可以监听，自行演示 */}
      {/* 这里定义ref并将其绑定到csstransition中是为了解决严格模式下的报错，这样就不会走报错的api */}
      <CSSTransition
        nodeRef={nodeRef}
        in={isshow}
        classNames="show"
        timeout={2000}
        unmountOnExit={true}
        appear
        onEnter={e=>{
            console.log(e,"开始进入动画")
        }}
        onEntering={e=>{
            console.log(e,"正在进入动画")
        }}
        onEntered={e=>{
            console.log(e,"结束进入动画")
        }}
      >
        {/* {isshow? "显示" :"不显示"} */}
        <h2 ref={nodeRef}>哈哈哈</h2>
      </CSSTransition>
    </div>
  );
}
