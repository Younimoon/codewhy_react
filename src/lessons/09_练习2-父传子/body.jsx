// import React from 'react'
import PropTypes from "prop-types";

export default function Body(props) {
  Body.propTypes= {
    children:PropTypes.string
  }
  return <div>
    <h3>{props.children}</h3>
  </div>;
}
