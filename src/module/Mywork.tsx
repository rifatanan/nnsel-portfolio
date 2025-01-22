import BackgroundRound from "@/components/BackgroundRound";
import Image from "next/image";
import React from "react";

const myWorkImagesItem = [
  { src: "/Images/MyWork/Image.png", name: "blue", description: "Orvillebury" },
  { src: "/Images/MyWork/Image (1).png", name: "green", description: "West Lavada" },
  { src: "/Images/MyWork/Image (2).png", name: "aqua", description: "Rempelshire" },
  { src: "/Images/MyWork/Image (3).png", name: "lime", description: "Delfinaland" },
  { src: "/Images/MyWork/Image (4).png", name: "fuchsia", description: "Buckridgeburgh" },
  { src: "/Images/MyWork/Image (5).png", name: "black", description: "Pfefferstad" },
  { src: "/Images/MyWork/Image (6).png", name: "purple", description: "Orvillebury" },
  { src: "/Images/MyWork/Image (7).png", name: "maroon", description: "Orvillebury" },
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
    <div>
      <div className="relative flex flex-col gap-[100px]">
        <BackgroundRound />
        <div className="flex flex-col">
          <h1 className="font-syne font-[700] text-[72px] leading-[86px]">My works</h1>
          <p className="font-[500] text-[18px] leading-[21px]">Showcase About Works</p>
        </div>
        <div className="border-[1px] border-[#949494] mb-[100px]"></div>
      </div>
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
                className="relative  rounded-lg overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={item.description}
                  width={360}
                  height={350}
                  className="w-full object-cover"
                />
                <div className="p-4 text-center">
				{item.name.toUpperCase()}
                  <h2 className="text-sm font-semibold">{item.description}</h2>
				  
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mywork;
