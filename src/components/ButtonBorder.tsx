import React from 'react'

const ButtonBorder = ({name,bgColor,border}:any) => {
  return (
	<button
      style={{
        backgroundColor: bgColor,
        borderColor: border
      }}
      className="inline-block uppercase border-2 px-[35px] py-[15px] rounded-full"
	>{name}</button>
  )
}

export default ButtonBorder
