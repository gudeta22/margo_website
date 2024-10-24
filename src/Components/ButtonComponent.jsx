import React from 'react'
import '../index.css'
function ButtonComponent(props) {
  return (
    <div>
       <a href={props.url} className=' fontstyle font-thin tracking-wide text-white uppercase hover:bg-red-900 transition-colors duration-500 ease-linear bg-red-700 w-[10rem] lg:w-[15rem] lg:h-[4rem] h-[3rem] flex  justify-center items-center'><div className=" w-10 h-[2px] rounded-lg bg-white mr-3"></div> <p>{props.title}</p></a>
    </div>
  )
}

export default ButtonComponent