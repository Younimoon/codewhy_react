// 函数的增强写法及效果
import ThmemContext from "./context/theme_context";
import Home from "./context";
// import About from "./context/About";
export default function Index() {
  const { Provider } = ThmemContext;
  return (
    <div>
      <Provider value={{ color: "red", fontSize: 30 }}>
        <Home></Home>
      </Provider>
    </div>
  );
}
