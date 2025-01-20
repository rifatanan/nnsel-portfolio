import Image from 'next/image'
import React from 'react'
import rightArrow from '../../public/SVG/icon.png'

const ButtonArrow = () => {
	return (
		<button className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white space-x-2 flex items-center px-5 py-3 gap-2 rounded-full transition duration-300">
			<span>EXPLORE WORKS</span>
			<Image src={rightArrow} width={16} height={10} alt='right-arrow'></Image>
		</button>
	)
}

export default ButtonArrow
