// import React from "react";
import { useState } from "react";
import Body from "./body";
import "./index.css";
export default function Index() {
  const [header] = useState(["流行", "古代", "现代"]);
  // //   let name = null
  //     let current = 0
  let [current, setCurrent] = useState(0);
  const changeHeader = (index) => {
    console.log(index);
    // current = index
    setCurrent((n) => {
      n = index;
      return n;
    });
    // console.log(curent);
  };

  // 通过父传子实现
  return (
    <div>
      <div className="header">
        {header.map((item, index) => (
          <div key={index}>
            <div>
              <h2
                className={index === current ? "active" : null}
                onClick={() => changeHeader(index)}
              >
                {item}
              </h2>
            </div>
            <div className="body">
              {index === current && <Body>{item}</Body>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
