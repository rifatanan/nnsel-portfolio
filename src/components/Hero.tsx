import React from 'react';
import BackgroundRound from './BackgroundRound'; // Optional background component
import ButtonArrow from './ButtonArrow'; // Button component with arrow

const Hero = () => {
	return (
		<div className="relative flex flex-col items-center justify-center min-h-screen text-white text-center gap-6 px-4 lg:px-0">
			{/* <BackgroundRound /> */}

			<h1 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl leading-snug sm:leading-tight md:leading-relaxed">
				Adaptive Logo Design <br /> for Your Brand
			</h1>

			<div className="h-1 w-24 sm:w-32 md:w-40 bg-orange-500 mx-auto rounded-full"></div>

			<ButtonArrow />
		</div>
	);
};

export default Hero;
