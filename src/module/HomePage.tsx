import Hero from '@/components/Hero'
import React from 'react'
import About from './About'
import MyProject from '@/module/myProject/index'

const HomePage = () => {
	return (
		<div>
			<Hero/>
			<About/>
			<MyProject/>
		</div>
	)
}

export default HomePage
