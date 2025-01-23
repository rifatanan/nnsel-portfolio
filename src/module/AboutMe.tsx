import About from '@/components/About'
import Image from 'next/image'
import React from 'react'
import person1 from '../../public/Images/AboutMe/person1.png'
import person2 from '../../public/Images/AboutMe/person2.png'


const AboutMe = () => {
  return (
	<div>
	  	<About name={"About Me"} description = {"Little Brief About Myself"}/>
		<div className='flex flex-col '>
			<div className='flex flex-col md:flex-row gap-20 pb-[100px]'>
				<div className='flex flex-wrap md:w-1/2'>
					<h1 className='font-syne font-[700] text-[80px] leading-[84px]'>My mission is to make design easier.</h1>
				</div>
				<div className='flex flex-wrap md:w-1/2'>
					<p className='font-openSans font-[600] text-[21px] leading-[39px] text-[#949494]'>Create custom Designs with AARONN that converts more visitors than any website. With lots of unique design, you can easily select a logo without hassle.
						Create custom landing logos with AARONN that converts more visitors than any website. With lots of revisions, you can easily build a logo without porbolem.</p>
				</div>
			</div>
			<div className='flex flex-col md:flex-row gap-10 pb-[100px]'>
				<div className='w-4/12'>
					<Image src={person1} width={0} height={0} layout="responsive" alt='person1'></Image>
				</div>
				<div className='w-8/12'>
					<Image src={person2} width={0} height={0} layout="responsive" alt='person2'></Image>
				</div>
			</div>
			<div className='flex flex-col gap-10 pb-[100px]'>
				<h1  className='font-syne font-[700] text-[48px] leading-[80px]'>Follow me on:</h1>
				<div className='flex flex-col md:flex-row gap-4 md:justify-between font-inter font-[700] text-[32px] leading-[38px]'>
					<h1>Dribble</h1>
					<h1>Twitter</h1>
					<h1>Facebook</h1>
					<h1>Instageam</h1>
				</div>
			</div>
		</div>
	</div>
  )
}

export default AboutMe
