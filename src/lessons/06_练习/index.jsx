// import React from 'react'

import { useEffect, useState } from "react";
import "./index.css";
export default function Index() {
  let [books, setBook] = useState([
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationYear: 1925,
      genre: "Fiction",
      price: 10,
      count: 1,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publicationYear: 1960,
      genre: "Fiction",
      price: 10,
      count: 1,
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      publicationYear: 1949,
      genre: "Fiction",
      price: 10,
      count: 1,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publicationYear: 1813,
      genre: "Fiction",
      price: 10,
      count: 1,
    },
  ]);
  let [sum, setSum] = useState(0);
  // 修改数组对象某属性的方法
  const reduce = (index) => {
    setBook((num) => {
      console.log(num);
      const boosk = num.map((item, i) => {
        console.log(item);
        if (i === index && item.count > 0) {
          return { ...item, count: item.count - 1 };
        }
        return { ...item };
      });
      return boosk;
    });
    console.log(books[index]);
  };
  const add = (index) => {
    setBook((books) => {
      const items = books.map((item, index1) => {
        if (index === index1) {
          const item1 = { ...item, count: item.count + 1 };
          //   getsum();
          console.log(item.price);
          return item1;
        }
        return { ...item };
      });
      return items;
    });
  };

  const Delete = (index) => {
    setBook((items) => {
     const arr =   items.filter((item, i) => {
        return index !== i;
      });
      return arr
    });
    // books = books;
    // console.log(books);
    // return books;
  };
  //   reduce的参数
  // accumulator：累加器，存储每一次回调函数的返回值。
  // currentValue：当前正在处理的元素。
  // currentIndex：当前元素的索引（可选）。
  // array：原始数组（可选）。
  const totalPrice = books.reduce((pre, item) => {
    return pre + item.count * item.price;
  }, 0);

  // 目前不知道如何使用setsum进行修改sum

  //   const getsum = () => {
  //     setSum(0);
  //     books.forEach((item) => {
  //       setSum((sum += item.count * item.price));
  //     });
  //   };
  return (
    <div>
      总价：{totalPrice}
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>书名</th>
            <th>出版日期</th>
            <th>数量</th>
            <th>价格</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.publicationYear}</td>
                <td>{item.count}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => {
                      reduce(index);
                    }}
                  >
                    -
                  </button>
                  <button onClick={() => add(index)}>+</button>
                </td>
                <td>
                  <button onClick={() => Delete(index)}>删除</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
