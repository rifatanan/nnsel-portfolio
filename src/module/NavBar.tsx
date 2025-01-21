import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react';
import logo from '../../public/SVG/Brand-logo (1).svg'
import ButtonBorder from '@/components/ButtonBorder'

type NavBarProps = {
	children?: ReactNode;
  };

const NavBar: React.FC<NavBarProps> = ({children}) => {

	return (
		<div className='font-[500] text-[14px] leading-[16px] '>
			<div className=' fixed w-full bg-bandColorSemiBlack flex flex-col md:flex-row justify-center lg:justify-between items-center md:items-start z-10 px-[130px] gap-2 md:gap-5 pt-2 md:pt-[33px]'>
				<Link href={'/'} className='cursor-pointer h-[50px] flex '>
					<Image className='text-white' src={logo} width={105} height={0} alt='logo'></Image>
				</Link>
				<ul className='flex flex-col md:flex-row uppercase text-white items-center  gap-[20px] md:gap-[70px] text-[#FFFFFF4D] text-[14px] font-[500] leading-[16px]'>
					<li><Link href={'/'}>Home</Link></li>
					<li><Link href={'/about-me'}>About Me</Link></li>
					<li><Link href={'/'}>My works</Link></li>
					<li>
						<ButtonBorder name={"Contact"} border = {'#FFFFFF4D'} bgColor={"#1A1A1A"}/>
					</li>
				</ul>
			</div>
			<div className='z-10'>
			{children}
			</div>
		</div>
	)
}

export default NavBar
