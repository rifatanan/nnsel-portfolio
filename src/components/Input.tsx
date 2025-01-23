import React from 'react'

const Input = ({name}:any) => {
  return (
	<div>
		<span className='font-rubik font-[500] text-[24px] leading-[28px] uppercase'>{name}</span>
		<input type="text" className='mt-[10px] text-[24px] border-b border-[#949494] w-full appearance-none bg-transparent outline-none '/>
	</div> )
}

export default Input
