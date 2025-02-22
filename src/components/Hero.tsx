import React from 'react';
import BackgroundRound from './BackgroundRound';
import ButtonArrow from './ButtonArrow';

const Hero = () => {
	return (
		<div className="flex flex-col items-center md:justify-center min-h-screen text-white text-center pt-[300px] md:pt-[100px] gap-6 px-4 lg:px-0">
			<BackgroundRound top={'120px'} right={'200px'}/>
			<div className='flex flex-col gap-[100px] justify-center items-center'>
				<h1 className="font-syne font-[700] text-[72px] leading-[86px]">Adaptive Logo Design <br /> for Your Brand</h1>
				<div className=' w-full flex justify-center relative'>
					<ButtonArrow name={"Explore works"} backgroundColor={'#FF9143'} borderSize={'1px'} borderColor={'#FF9143'}/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
