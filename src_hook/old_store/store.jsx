// 该文件专门用于暴露一个 store 对象，整个应用只有一个store 对象。

// 创建一个仓库
// import { configureStore } from "redux";
import { configureStore } from "@reduxjs/toolkit"
import reducer from "./reducer"
// 创建数据仓库
const store = configureStore(reducer)
export default store