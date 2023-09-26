// import React from 'react'

import { useState } from "react";

export default function Index() {
  const [stu, setstu] = useState([
    {
      id: 1,
      name: "123",
    },
    {
      id: 12,
      name: "1235",
    },
    {
      id: 14,
      name: "1232",
    },
    {
      id: 15,
      name: "123678",
    },
  ]);
  //   const arr = [1,2,3]
  // 不可行，我也不知道为啥
  //   const filterstu = setstu((stu) => {
  //     const a = stu.filter((item) => {
  //       return item.id > 10;
  //     });
  //     console.log(a);
  //     return a;
  //   });
  const filterstu = stu.filter((item) => item.id > 10);
  //   console.log(filterstu);
  return (
    <div>
      <ul>
        {stu.map((item, index) => {
          //   每一个return都需要包含一个根组件不只是最外层
          // 但是如果只有一个标签可以不添加跟标签默认该标签就是根标签
          // 目前的理解存在()的地方就需要加上根标签(若有多个并列标签)
          //
          return (
            <div key={index}>
              {item.id > 10 && (
                <div key={index}>
                  <li>{item.name}</li>
                  <li>{item.id}</li>
                </div>
              )}
            </div>
          );
        })}
        {filterstu.map((item, index) => {
          return <div key={index}>{item.name}</div>;
        })}
        <button></button>
        {/* {arr} */}
      </ul>
    </div>
  );
}
