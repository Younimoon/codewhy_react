// import logo from './logo.svg';
import "./App.css";
// import Context  from 'react';
// import Context from "./components/context";
import Contexttow from "./components/contexttow";
import React from "react";
import Mycontext from './Mycontext'
import Userreducer  from "./components/usereducer";
import UseCallback from './components/useCallback'
import UseMemo from "./components/userMemo";
import StoreDemo from "./components/storeDemo";
import Router from "./router";
import { Suspense } from 'react'
// import { Navigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// 状态管理
// export const { Provider, Consumer } = React.createContext("默认名称");
function App() {
  const {Provider} = Mycontext
  const person = {
    name: "huang",
    sex: "nan",
  };
  return (
    <div className="App">
       {/* <NavLink className='list-group-item' to="/demo">Message</NavLink> */}
      <Suspense fallback={<div>loading...</div>}>
        <Router/>
      </Suspense>
      {/* <Provider value={{name:"huang",xing:"weipeng"}}> */}
      <Provider value={person.name}>
        {/* <Context></Context> */}
        <Contexttow></Contexttow>
      </Provider>
      <StoreDemo></StoreDemo>
      <Userreducer></Userreducer>
      <UseCallback></UseCallback>
      <UseMemo></UseMemo>
      <div className="context">123</div>
    </div>
  );
}

export default App;
