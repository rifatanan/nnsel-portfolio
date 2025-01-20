import Image from 'next/image'
import React from 'react'
import backgroundRound from '../../public/SVG/Vector 8.svg'

const BackgroundRound = () => {
  return (
	<div>
		<Image src={backgroundRound} width={517} height={273} alt='backgroundRound' className=' absolute bg-transparent'></Image>
	</div>
  )
}

export default BackgroundRound
