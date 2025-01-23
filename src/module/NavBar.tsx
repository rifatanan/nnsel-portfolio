'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode, useState } from 'react';
import logo from '../../public/SVG/Brand-logo.svg'
import ButtonBorder from '@/components/ButtonBorder'

type NavBarProps = {
	children?: ReactNode;
};

const navItem = [
	{
		index:1,
		name: 'home',
		link:'/'
	},
	{
		index:2,
		name: 'about me',
		link:'/about-me'
	},
	{
		index:3,
		name: 'my works',
		link:'/my-works'
	},
	{
		index:4,
		name: 'contact',
		link:'/contact'
	},
]

const NavBar: React.FC<NavBarProps> = ({children}) => {
	const [currentIndex ,setCurrentIndex] = useState(0);

	return (
		<div className='font-[500] text-[14px] leading-[16px] '>
			<div className=' fixed w-full bg-bandColorSemiBlack flex flex-col md:flex-row justify-center lg:justify-between items-center md:items-start z-10 px-[130px] gap-2 md:gap-5 pt-2 md:pt-[33px]'>
				<Link href={'/'} className='cursor-pointer h-[50px] flex '>
					<Image className='text-white' src={logo} width={105} height={0} alt='logo'></Image>
				</Link>
				<ul className='flex flex-col md:flex-row uppercase text-white items-center  gap-[20px] md:gap-[70px] text-[#FFFFFF4D] text-[14px] font-[500] leading-[16px]'>
					{
						navItem.map((item,index)=>
							<li key={index}>
								<Link
									href={item.link}
									onClick={() => setCurrentIndex(index)}
									className={`${currentIndex === index?'text-green-500':''}`}
								>{item.name === "contact"?<ButtonBorder name={"Contact"}/>:item.name}
								</Link>
							</li>
						)
					}
				</ul>
			</div>
			<div className='z-10'>
				{children}
			</div>
		</div>
	)
}

export default NavBar
