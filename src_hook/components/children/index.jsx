import { Consumer } from "../../App";
import React from "react";
function Children() {
  return (
    <div>
      <Consumer>
        {(name) => (
          <div
            style={{
              border: "1px solid green",
              width: "60%",
              margin: "50px auto",
              textAlign: "center",
            }}
          >
            <p>孙组件。获取传递下来的值:{name.name}</p>
          </div>
        )}
      </Consumer>
    </div>
  );
}
export default Children;
