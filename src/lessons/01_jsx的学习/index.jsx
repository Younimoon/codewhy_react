import { useState } from "react";
export default function Learn_jsx() {
  const [num, setnum] = useState(["1", "2", 3, 4, 5]);
  const nums = num.map((item,idnex)=><li key={idnex}>{item}</li>)
  
    //   绑定属性
    const title = "12313"
    const herf = "https://www.baidu.com"
    const isActive = true
    const ab = ["abc","cde"]
  return <div title={title}>
      {/* // 绑定类名 */}
      <h1 style={{color:"red",fontSize:"10px"}} className="abc cba">aaaa</h1>
      {/* 动态类名＋静态类名 */}
      <h2 className={`abc cba ${isActive ? "active" :""}`}></h2>
      <h1 className={ab.join(" ")}></h1>
      <a href={herf}>跳转百度</a>
      {nums}{getlist(num)}</div>;
}
// 使用方法添加到jsx
function getlist(data){
    const Data =  data.map((item,index)=>{
        return <li key={index}>{item}</li>
    })
    console.log(Data);
    return Data
}