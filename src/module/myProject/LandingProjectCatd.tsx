import Image from 'next/image';

interface ProjectProps {
	name: string;
	image: string;
	client:string;
	work: string[];
}
interface LandingProjectCatdProps {
	project:ProjectProps;
}

const LandingProjectCatd = ({project}:LandingProjectCatdProps) => {
    return (
        <div className="flex flex-col gap-[20px] ">
            <div className='w-full'>
                <Image
                    src={project['image']}
                    width={560}
                    height={620}
                    alt="Project Image"
                />
            </div>
            <div className="flex flex-col gap-[20px]">
                <div className="flex items-center gap-[32px] font-syne text-[24px] leading-[32px] py-[15px]">
                    {project['name']}
					<div className='border-bandColorYellow border-[1px] w-[48px]'></div>
                </div>
                <div className="font-rubik font-[400] text-[14px] leading-[22px] flex flex-col gap-2">
                    <div className="flex gap-6">
                        <span className=" text-[#606060]">
                            Client:  
                        </span>
                        <span className="text-white">{project['client']}</span>
                    </div>
                    <div className="flex gap-8">
                        <span className=" text-[#606060]">
                            Work:{' '}
                        </span>
						{
							project['work']?.map(work => 
								<span className="text-white pe-2" key={work}>{work}</span>
							)
						}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingProjectCatd;
