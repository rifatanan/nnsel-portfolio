import ButtonBorder from '@/components/ButtonBorder'
import Image from 'next/image'
import React from 'react'
import person from '../../public/Images/HomePage/People1.png'
import BackgroundRound from '@/components/BackgroundRound'

const AboutPerson = () => {
	return (
		<div className='flex flex-col md:flex-row  gap-[40px] justify-between pt-[100px] md:mt-0'>
			<div className='lg:w-3/5 md:pr-[100px] relative'>
				<BackgroundRound top={'-140px'} right={'400px'}/>
				<div className='flex flex-col relative gap-[40px] pt-[50px]'>
					<h1 className='font-syne font-[700] text-[56px] leading-[67px]'>Let's get know <br></br> about me closer</h1>
					<p className='font-rubik font-[400] text-[18px] leading-[28px]'>Aaronn is a New York-based visual designer focusing on branding and visual identity. Her portfolio showcases her wide range of work, spanning books, posters and web design.</p>
					<div className='w-fit pt-[50px]'>
						<ButtonBorder name={"Discover More About Me"} color={"#FF9143"} border = {'#FF9143'} bgColor={"#FF9143"}></ButtonBorder>
					</div>
				</div>
			</div>
			<div className='lg:w-1/2 h-full relative'>
				<Image
					className="rounded-lg"
					src={person}
					layout="responsive"
					width={0}
					height={0}
					alt="Person"
				/>
				<div className="absolute top-[-10px] w-[50%] right-0">
					<svg width="110" height="34" viewBox="0 0 110 34" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="0.5" y="0.5" width="109" height="33" rx="16.5" stroke="#FF9142"/>
					</svg>
				</div>
				<div className="absolute bottom-[10px] left-[-40px] h-[200px]">
					<svg width="55" height="178" viewBox="0 0 55 178" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="0.5" y="0.5" width="54" height="177" rx="27" stroke="#FF9142"/>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default AboutPerson
