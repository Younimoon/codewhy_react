// import React from "react";

import { useState } from "react";
// import { loadConfigFromFile } from "vite";

export default function Options() {
  // 受到人为控制
  const [fruit, setfruit] = useState(["bnana"]);
  const handlechangeFruit = (e) => {
    console.log(e.target.selectedOptions);
    // 进行多选
    const options = Array.from(e.target.selectedOptions)
    const values = options.map(item=>item.value)
    // 多选的操作
    setfruit((data)=>{
        // console.log(values[0]);
        data.push(values[0])
        // console.log(data);
        return data
    });
    // console.log(fruit);
  };
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <select value={fruit} onChange={handlechangeFruit} multiple>
                <option value="app">苹果</option>
                <option value="bnana">香蕉</option>
                <option value="origin">橘子</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
