import About from "@/components/About";
import BackgroundRound from "@/components/BackgroundRound";
import ButtonBorder from "@/components/ButtonBorder";
import Image from "next/image";
import React from "react";

const myWorkImagesItem = [
	{ src: "/Images/MyWork/Image.png", name: "blue", description: "Orvillebury" },
	{ src: "/Images/MyWork/Image (1).png", name: "green", description: "West Lavada" },
	{ src: "/Images/MyWork/Image (2).png", name: "aqua", description: "Rempelshire" },
	{ src: "/Images/MyWork/Image (3).png", name: "lime", description: "Delfinaland" },
	{ src: "/Images/MyWork/Image (4).png", name: "fuchsia", description: "Buckridgeburgh" },
	{ src: "/Images/MyWork/Image (5).png", name: "black", description: "Pfefferstad" },
	{ src: "/Images/MyWork/Image (6).png", name: "purple", description: "South Adrienne" },
	{ src: "/Images/MyWork/Image (7).png", name: "maroon", description: "Lake Trevor" },
];

const Mywork = () => {
	const generateRows = (items:any) => {
		const rows = [];
		let i = 0;
		while (i < items.length) {
			rows.push(items.slice(i, i + 3));
			i += 3;
			if (i < items.length) {
				rows.push(items.slice(i, i + 2));
				i += 2;
			}
		}
		return rows;
	};

  const rows = generateRows(myWorkImagesItem);

  return (
    <div className=" ">
		<About name={"My works"} description = {"Showcase About Works"}/>
      	<div className="space-y-6 p-6">
			{rows.map((row, index) => (
			<div
				key={index}
				className={`grid ${
				row.length === 3
					? "grid-cols-1 md:grid-cols-3"
					: "grid-cols-1 md:grid-cols-2"
				} gap-6`}
			>
				{row.map((item:any, index:any) => (
				<div
					key={index}
					className="relative  rounded-lg overflow-hidden flex flex-col gap-4"
				>
					<Image
					src={item.src}
					alt={item.description}
					width={360}
					height={350}
					className="w-full object-cover"
					/>
					<div className="p-4 text-center font-inter font-[700] flex flex-col gap-3">
						<h3  className=" text-[13px] leading-[15px]">{item.name.toUpperCase()}</h3>
						<h2 className=" text-[24px] leading-[34px]">{item.description}</h2>
					</div>
				</div>
				))}
			</div>
			))}
      	</div>
		<div className="flex justify-center pb-[100px]">
			<ButtonBorder name={"Load more works"} color={"#FF9143"} border = {'#FF9143'} bgColor={"#262A2C"}></ButtonBorder>
		</div>
    </div>
  );
};

export default Mywork;
