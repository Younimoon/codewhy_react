// import React from "react";
import eventBus from "./utils/Event_bus";
export default function Children() {
  const preClick = () => {
    console.log("上一个");
    eventBus.emit("preclick",123123)
  };
  const nextClick = () => {
    console.log("下一个");
    eventBus.emit("nextclick","dududududududualiealie")
  };
  return (
    <div>
      <button onClick={preClick}>上一个</button>
      <button onClick={nextClick}>下一个</button>
    </div>
  );
}
