import ButtonBorder from '@/components/ButtonBorder'
import Image from 'next/image'
import React from 'react'
import horizontal from '../../public/SVG/horizontal.svg'
import vertical from '../../public/SVG/vertical.svg'
import person from '../../public/Images/HomePage/People1.png'


const About = () => {
	return (
		<div className='flex flex-col md:flex-row px-5 md:px-[50px] lg:px-[100px] gap-[50px]'>
			<div className='flex flex-col lg:w-1/2 gap-5'>
				<h1 className='font-syne font-[700]  text-[56px] leading-[67px]'>Let's get know about me closer</h1>
				<p>Aaronn is a New York-based visual designer focusing on branding and visual identity. Her portfolio showcases her wide range of work, spanning books, posters and web design.</p>
				<ButtonBorder name={"Discover More About Me"}></ButtonBorder>
			</div>
			<div className="relative rounded-lg lg:w-1/2">
				<div className="absolute top-[-10px] right-0 md:right-[-20px]">
					<Image src={horizontal} width={60} height={10} alt="Horizontal Decoration" />
				</div>
				<div className="absolute bottom-[10px] left-[-40px] h-[200px]">
					<svg width="55" height="178" viewBox="0 0 55 178" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="0.5" y="0.5" width="54" height="177" rx="27" stroke="#FF9142"/>
					</svg>
				</div>
				<Image
					className="rounded-lg"
					src={person}
					width={450}
					height={500}
					alt="Person"
				/>
			</div>
		</div>
	)
}

export default About
