import { lazy } from "react";
// import { Route,Routes } from "react-router-dom";
const Demo = lazy(()=>import("../pages/demo"))
const Demo1 = lazy(()=>import("../pages/demo1"))
const Router =[
    {
        path:"/demo",
        element:<Demo></Demo>
    }, {
        path:"/demo1",
        element:<Demo1></Demo1>
    }
]
export default Router