// import React from "react";

import React, { useState } from "react";

const Index = () => {
  const [userinfo, setUserinfo] = useState({
    username: "",
    password: "",
    agreed: null,
    hoobies: [
      {
        value: "sing",
        text: "唱歌",
        isChecked: false,
      },
      {
        value: "dance",
        text: "跳舞",
        isChecked: false,
      },
      {
        value: "打篮球",
        text: "ball",
        isChecked: false,
      },
    ],
  });
  //   const [password, setPassword] = useState("");

  const handleChange = (e) => {
    // console.log(e);
    setUserinfo((userinfo) => {
      return { ...userinfo, [e.target.name]: e.target.value };
    });
  };

  //   const handlePasswordChange = (e) => {
  //     setUserinfo((userinfo)=>{
  //         return {...userinfo,password:e.target.value}
  //     });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 在这里可以添加验证逻辑或者发送表单数据到服务器
    console.log("用户名:", userinfo.username);
    console.log("密码:", userinfo.password);
    console.log(userinfo);
  };
  const handleInputChange = (e) => {
    setUserinfo({ ...userinfo, agreed: e.target.checked });
    console.log(e.target.checked);
    // console.log(123);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        用户名:
        <input
          name="username"
          type="text"
          value={userinfo.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        密码:
        <input
          type="password"
          name="password"
          value={userinfo.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        您的爱好：
        {hoobies.map((item, index) => {
          return (
            <input
              key={item.value}
              type="checkbox"
              name="sing"
              checked={item.checked}
              //   onChange={handleInputChange}
            />
          );
          唱歌;
        })}
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="siAgree"
          checked={userinfo.agreed}
          onChange={handleInputChange}
        />
        同意协议
      </label>
      <br />
      <button type="submit">登录</button>
    </form>
  );
};

export default Index;
