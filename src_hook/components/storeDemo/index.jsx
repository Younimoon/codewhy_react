import React from 'react'
import { useSelector } from 'react-redux'
export default function StoreDemo() {
  const  {num} = useSelector(()=>{
    // num:state.num
  })
  return (
    <div>index{num}</div>
  )
}
