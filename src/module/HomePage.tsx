import Hero from '@/components/Hero'
import React from 'react'
import About from './About'
import MyProject from '@/module/myProject/index'
import Testimonial from '@/components/Testimonial'
import Footer from '@/components/Footer'

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
