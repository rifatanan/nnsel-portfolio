import About from '@/components/About'
import Image from 'next/image'
import React from 'react'
import image1 from '../../public/Images/Project/projectFront3.png'
import image2 from '../../public/Images/Project/Rectangle 6473.png'
import image3 from '../../public/Images/Project/Rectangle 6474.png'
import { styleText } from 'util'

const othersProjectList = [
	{
		src:'/Images/Project/Rectangle 6475.png',
		title:'Logo Project 1',
		descrption:'Branding'
	},
	{
		src:'/Images/Project/Rectangle 6476.png',
		title:'Logo Project 1',
		descrption:'Branding'
	},
	{
		src:'/Images/Project/Rectangle 6477.png',
		title:'Logo Project 1',
		descrption:'Branding'
	}
]

const ProjectsDetails = () => {
  return (
	<div>
	  	<About name={"Project Detail"} description = {"Details About The Porject"}/>
		<div className='flex flex-col items-center gap-[50px]'>
			<div className='w-full flex justify-center'>
				<Image src={image1} width={0} height={0} alt={`${image1}` }  className="object-cover"/>
			</div>
			<div className='w-full md:w-[750px] flex flex-col gap-[50px]'>
				<h1 className='font-syne font-[700] text-[32px] leading-[38px]'>Project Story</h1>
				<p className='font-rubik font-[400] text-[16px] leading-[27px] text-[#9CA7B8]'>The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it.<br></br><br></br>
					We cannot imagine a wedding without the opportunity to capture it on film, we would not be able to remember the growing up of children or the holidays if we did not have pictures.
				</p>
			</div>
			<div className='flex flex-col md:flex-row gap-5'>
				<Image src={image2} width={0} height={0} alt=''/>
				<Image src={image3} width={0} height={0} alt=''/>
			</div>
			<div className='w-full md:w-[750px] flex flex-col gap-[50px]'>
				<h1 className='font-syne font-[700] text-[32px] leading-[38px]'>Day One</h1>
				<p className='font-rubik font-[400] text-[16px] leading-[27px] text-[#9CA7B8]'>Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. 
					<br /><br />
					And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills
				</p>
			</div>
			<div className='flex justify-between  w-full'>
				<button className='flex gap-5 p-3 justify-center items-center'>
					<div className='pt-2'>
						<svg width="50" height="13" viewBox="0 0 50 13" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M0.656006 1.33081e-07C-0.606846 2.23877e-05 0.274555 1.41676 0.656006 1.83698L10.8721 12.6848C11.2536 13.1051 11.872 13.1051 12.2535 12.6848C12.6349 12.2646 12.6349 11.5833 12.2535 11.1631L3.7048 2.15214H49.0232C49.5627 2.15214 50 1.67038 50 1.0761C50 0.481823 49.5627 6.58092e-05 49.0232 6.58092e-05H3.7048C3.7048 6.58092e-05 0.858303 -3.43187e-06 0.656006 1.33081e-07Z" fill="white"/>
						</svg>
					</div>
					<span className='uppercase'>Previous work</span>
				</button>
				<button className='flex gap-5 p-3'>
				<span className=' uppercase'>next work</span>
					<div className='pb-2'>
						<svg width="50" height="13" viewBox="0 0 50 13" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M49.344 13C50.6068 13 49.7254 11.5832 49.344 11.163L39.1279 0.315165C38.7464 -0.105054 38.128 -0.105054 37.7465 0.315165C37.3651 0.735383 37.3651 1.41669 37.7465 1.83691L46.2952 10.8479H0.976766C0.437313 10.8479 0 11.3296 0 11.9239C0 12.5182 0.437313 12.9999 0.976766 12.9999H46.2952C46.2952 12.9999 49.1417 13 49.344 13Z" fill="white"/>
						</svg>
					</div>
				</button>
			</div>
		</div>
		<div className='w-full h-fit py-[100px]'>
			<h1 className='text-center font-syne font-[700] text-[64px] leading-[76px] pb-[100px]'>Other Project</h1>
			<div className='flex flex-col md:flex-row gap-5 justify-between'>
				{
					othersProjectList.map((item,index)=>(
						<div key={index} className='flex flex-col items-center md:items-start gap-5'>
							<Image src={item.src} width={360} height={465} alt='a'/>
							<div className='flex flex-col'>
								<h1 className='font-sora font-[600] text-[24px] leading-[29px]'>{item.title}</h1>
								 <p className='font-rubik font-[400] text-[18px] leading-[21px] text-[#949494]'>{item.descrption}</p>
							</div>
						</div>
					))
				}
			</div>
		</div>
	</div>
  )
}

export default ProjectsDetails
