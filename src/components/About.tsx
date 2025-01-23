import React from 'react'
import BackgroundRound from './BackgroundRound'

const About = ({name,description}:any) => {
	return (
		<div className="relative flex flex-col gap-[100px]">
			<BackgroundRound top={'-50px'}right={'1000px'}/>
			<div className="flex flex-col ">
				<h1 className="font-syne font-[700] text-[72px] leading-[86px]">{name}</h1>
				<p className="font-[500] text-[18px] leading-[21px]">{description}</p>
			</div>
			<div className="border-[1px] border-[#949494] mb-[100px]"></div>
		</div>
	)
}

export default About
