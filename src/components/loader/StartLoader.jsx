import React from 'react'
import "./StartLoader.css"
import logo from "../../assets/logo.png"

const StartLoader = () => {
  return (
    <div className='flex justify-center items-center h-full' >
      <div className="loader">
  <img src={logo} className="text w-full h-[250px]" />
    
 
</div>
    </div>
  )
}

export default StartLoader
