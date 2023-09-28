// import React from 'react'

import { useState } from "react";

export default function Index() {
  const [books, setbooks] = useState([
    {
      title: "JavaScript高级编程",
      author: "Nicholas C. Zakas",
      publicationDate: "2012-02-01",
      price: 69.99,
    },
    {
      title: "深入理解ES6",
      author: "Nicholas C. Zakas",
      publicationDate: "2016-01-01",
      price: 59.99,
    },
    {
      title: "CSS揭秘",
      author: "Lea Verou",
      publicationDate: "2015-05-25",
      price: 49.99,
    },
  ]);
  const addBook = () => {
    const newbook = {
      title: "CSS揭秘12312321",
      author: "Lea Verou12321321",
      publicationDate: "2015-05-25",
      price: 49.99111,
    };
    // 添加一本书
    setbooks((data) => {
      return [...data, newbook];
    });
    // 删除一本书 可以使用filter
  };
  return (
    <div>
      <h2>
        书籍列表
        <ul>
          {books.map((item, index) => (
            <li key={item}>{item.title}</li>
          ))}
        </ul>
      </h2>
      <button onClick={addBook}>添加新书籍</button>
    </div>
  );
}
