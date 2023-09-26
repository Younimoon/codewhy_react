import { useState } from "react";
import './index.css'
export default function Index() {
  const [movies, setmovies] = useState([
    { isActive: true, naem: "黄大蛇" },
    { isActive: false, naem: "黄大蛇" },
    { isActive: false, naem: "黄大蛇" },
    { isActive: false, naem: "黄大蛇" },
  ]);
  let [currentIndex ,setcurrentIndex] =  useState(0)
  const changecolor = (index) => {
    setmovies((prevMovies) => {
      const updatedMovies = prevMovies.map((item, i) => {
        if (i === index) {
          return { ...item, isActive: true };
        } else {
          return { ...item, isActive: false };
        }
      });
       return updatedMovies;
    });
  };
  const changeColor = (index)=>{
    setcurrentIndex(currentIndex=index)
  }
  return (
    <div>
      <ul>
        {movies.map((item, index) => {
          return (
            <li
              style={item.isActive ? { color: "red" } : null}
              onClick={() => {
                changecolor(index);
              }}
              key={index}
            >
              {item.naem}
            </li>
          );
        })}
      </ul>
      <ul>
        {movies.map((item, index) => {
          return (
            <li
              className={currentIndex == index ? "active" :null}
              onClick={() => {
                changeColor(index);
              }}
              key={index}
            >
              {item.naem}
            </li>
          );
        })}
      </ul>
      {/* 这种是针对于需要传递参数和event时，需要使用箭头函数和传递event */}
      <button
        onClick={(event) => {
          change(123, event);
        }}
      >
        点击
      </button>
    </div>
  );
}
const change = (data, event) => {
  console.log(event, 123123, data);
};
