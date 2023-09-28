// import React from "react";
// function Auth_login(orgC) {
//   return (props) => {
//     const token = localStorage.getItem("token")
//     if(token) {
//       return <orgC {...props}></orgC>;
//     }else{
//       console.log(132);
//     }
//   };
// }
// 非常抱歉我之前的回答有误，请看下面的修改后的代码：

function Auth_login(orgC) {
  return (props) => {
    const token = localStorage.getItem("token");
    if (token) {
      return <orgC {...props} />;
    } else {
      return <div>请先登录</div>;
    }
  }}
// 
// const MyComponent = (props) => {
  // 组件的具体实现
  // return <div>Hello, World!</div>
// };

// 使用 Auth_login 函数来添加认证逻辑
// const AuthenticatedComponent = Auth_login(MyComponent);
export default Auth_login