// import React from 'react'
// 组件可以控制用户的输入过程的组件叫受控组件说白了就是双向绑定

import { useState ,useRef} from "react"

function Index() {
  const myElementRef = useRef();
	const [msg,setMsg] = useState("")
  const handleClick = () => {
    // myElementRef.current.focus();
		// 非受控组件通过操作dom来获取值 
		console.log(myElementRef.current.value);
  };

  return (
    <div>
			{/* 如果设置value就是受控组件，但是defaultvalue为非受控组件 */}
      <input defaultValue={msg} type="text" ref={myElementRef} />
      <button onClick={handleClick}>获取结果</button>
    </div>
  );
}
export default Index