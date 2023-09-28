// import React from 'react'
import ThmemContext from "./theme_context.js";

export default function WithTheme(originCom) {
  //   function NewComponent() {}
  //   return <NewComponent></NewComponent>;
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <ThmemContext.Consumer>
        {(value) => <originCom {...value} {...props} />}
      </ThmemContext.Consumer>
    );
  };
}
