import { useState } from "react";
import './index.css'
export default function Header(props) {
  const [header, setheader] = useState(["流行", "古代", "现代"]);
  let [current, setCurrent] = useState(0);
  const change = (index)=>{
    setCurrent((n) => {
        n = index;
        return n;
      });
      props.changeHeader(header[index])
  }
  return (
    <div>
      <div className="header">
        {header.map((item, index) => (
          <div key={index}>
            <div>
              <h2
                className={index === current ? "active" : null}
                onClick={()=>change(index)}
              >
                {item}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
