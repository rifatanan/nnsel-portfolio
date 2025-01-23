import Hero from '@/components/Hero'
import React from 'react'
import About from './AboutPerson'
import MyProject from '@/module/myProject/index'
import Testimonial from '@/components/Testimonial'

const HomePage = () => {
	return (
		<div>
			<Hero/>
			<About/>
			<MyProject/>
			<Testimonial/>
		</div>
	)
}

export default HomePage
