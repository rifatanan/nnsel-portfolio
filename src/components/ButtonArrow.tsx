import Image from 'next/image'
import React from 'react'
import rightArrow from '../../public/SVG/icon.png'

const ButtonArrow = ({name,backgroundColor,borderSize,borderColor}:any) => {
	return (
		<button className=" absolute font-[700] hover:bg-orange-600 cursor-pointer text-white space-x-2 flex items-center px-[40px] py-[20px] gap-2 rounded-full transition duration-300"
			style={{
				backgroundColor:backgroundColor,
				border: `${borderSize} solid ${borderColor}`
			}}>
			<span>{name}</span>
			<Image src={rightArrow} width={16} height={10} alt='right-arrow'></Image>
		</button>
	)
}

export default ButtonArrow
