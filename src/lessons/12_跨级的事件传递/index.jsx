// import React from "react";
import { useEffect } from "react";
import Son from "./son";
import eventBus from "./utils/Event_bus";
export default function Index() {
  useEffect(() => {
    eventBus.on("preclick", (data) => {
      console.log("监听到的数据", data);
    });
    // return () => {
    //   // 销毁监听
    //   eventBus.off("preclick");
    // };
  }, []);
  return (
    <div>
      Index<Son></Son>
    </div>
  );
}
// eventbus的使用 下载插件->创建一个构造函数->需要被促发的函数用
// eventBus.emit（name,传递的数据） 这里的eventBus是构造函数的实例化名称
// 去促发事件的函数 eventBus.on（name,回调函数（参数形式接受需要的传递过来的数据））
