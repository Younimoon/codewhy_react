import { useReducer } from "react";

function Userreducer() {
  function reducer(state, action) {
      if(action.type === "age"){
          return {
              age:state.age+1
          }
      }
  }
  // useReducer 是 useState 的替代方案。
  // 当 useState 不能很好的满足需要的时候，useReducer 可能会解决我们的问题。
  // state 是值当前的状态，dispatch是一个方法，调用该方法会自动调用useRecuder的第一个参数函数
  //  useRecuder的第二个参数是state的初始值   
  const [state, dispatch] = useReducer(reducer, { age: 12 });
  return (
    <div>
      <button
        onClick={() => {
        console.log(dispatch);
          dispatch({ type: "age" });
        }}
      >
        点击+1
      </button>
      <span>{state.age}</span>
    </div>
  );
}
export default Userreducer;
