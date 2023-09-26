import React from "react";
import { useContext } from "react";
export default function Son() {
  const theme = React.createContext();
  Son.contextType = theme;
//   console.log(context);
const context = useContext(theme)
console.log(context);
  return <div>Son</div>;
}
