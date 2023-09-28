import { useContext } from "react";
import Mycontext from "../../Mycontext";
function Contexttow() {
  // usecontext的使用
  // 1 创建一个createContext()的文件分别引入祖组件和子组件
  // 2 在祖组件当中导出引入组件的provider并对其添加value属性
  // 3  在子组件当中进行如下操作
  const context = useContext(Mycontext);
  console.log(context);
  return <div>contexttow:{context}</div>;
}
export default Contexttow;
