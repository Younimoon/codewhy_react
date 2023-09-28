// import React from 'react'
import { useContext } from 'react'
import ThmemContext from './theme_context'
export default function Home() {
  const context = useContext(ThmemContext)
  console.log(context);
  return (
    <div>
      {context.color}
    </div>
  )
}