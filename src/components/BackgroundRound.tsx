import Image from 'next/image'
import React from 'react'
import backgroundRound from '../../public/SVG/Vector 8.svg'

const BackgroundRound = ({top,right}:any) => {
	return (
		<Image src={backgroundRound}
			width={517}
			height={273}
			alt='backgroundRound'
			className='absolute bg-transparent'
			style={{
				top:top,
				right:right
			}}
		></Image>
	)
}

export default BackgroundRound
