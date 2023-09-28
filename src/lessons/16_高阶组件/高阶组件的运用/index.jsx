import React, { useState } from "react";
import Cart from "./cart";
// 需求：用户登录显示cart页面，未登录显示login页面
// 做一个登录鉴权
export default function Index() {
    const [isShow,setIsshow] = useState(false)
  return (
    <div>
      Index
      {/* { isShow? <Cart></Cart> :alert("请先进行登录")} */}
      <Cart></Cart>
    </div>
  );
}
