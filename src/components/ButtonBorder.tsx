import React from 'react'

const ButtonBorder = ({name,color,border}:any) => {
  return (
	<button className={`uppercase border-[#FFFFFF4D] bg-bandColorBlack border-[2px] px-[20px] py-[7px] rounded-full`}>{name}</button>
  )
}

export default ButtonBorder
