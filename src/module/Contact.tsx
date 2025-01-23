'use client'
import About from '@/components/About'
import ButtonBorder from '@/components/ButtonBorder'
import Input from '@/components/Input'
import Image from 'next/image'
import React from 'react'
import laptop from '../../public/Images/ContactMe/laptop.png'
import { FormEvent } from 'react';


const Contact = () => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
		e.preventDefault();
	}
  return (
	<div className=''>
	  	<About name={"Contact Me"} description = {"For Any Project Knock Us"}/>
		<div className='flex flex-col md:flex-row w-full h-screen gap-5 items-center'>
			<h1 className='w-1/2 font-syne font-[700] text-[64px] leading-[76px]'>Get in Touch With Us</h1>
			<form onClick={(e)=>handleSubmit(e)} className='flex flex-col gap-5 w-1/2'>
				<Input name={"name"}/>
				<Input name={"subject"}/>
				<Input name={"message"}/>
				<div className='w-fit'>
					<ButtonBorder name={"send"} bgColor={'#FF9143'} border={'#FF9143'}/>
				</div>
			</form>
		</div>
		<div className='w-full h-svh'>
			<Image src={laptop} width={0} height={0} alt='laptop'/>
		</div>
		<div className="flex pb-[50px] gap-[100px] justify-center font-syne font-[700] text-[24px] leading-[28px]">
			<p>Street Avenue 21, CA</p>
			<p>+9 0283353</p>
			<p>info@aaronn.com</p>
		</div>
	</div>
  )
}

export default Contact
