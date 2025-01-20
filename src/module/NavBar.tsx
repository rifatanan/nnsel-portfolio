import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react';
import logo from '../../public/SVG/Brand-logo (1).svg'
import ButtonBorder from '@/components/ButtonBorder'

const NavBar= () => {
	return (
		<div className='font-[500] text-[14px] leading-[16px] mt-[20px] px-[100px]'>
			<div className='flex flex-col md:flex-row justify-between w-full items-center gap-10'>
				<Link href={'/'} className=' cursor-pointer '>
					<Image className='text-white' src={logo} width={85} height={15} alt='logo'></Image>
				</Link>
				<ul className='flex flex-col md:flex-row uppercase text-white items-center gap-[30px] text-[#FFFFFF4D] text-[10px] font-[500] leading-[16px]'>
					<li><Link href={'/'}>Home</Link></li>
					<li><Link href={'/'}>About Me</Link></li>
					<li><Link href={'/'}>My works</Link></li>
					<li>
						<ButtonBorder name={"Contact"}/>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default NavBar
