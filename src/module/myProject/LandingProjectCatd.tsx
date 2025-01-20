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
        <div className="m-0 flex flex-col items-center">
            <div>
                <Image
                    src={project['image']}
                    width={380}
                    height={450}
                    alt="Project Image"
                />
            </div>
            <div className="flex flex-col items-start w-[380px]">
                <div className="font-syne font-bold mt-2 mb-4">
                    {project['name']}
                </div>
                <div className="space-y-1">
                    <div className="font-rubik flex items-center text-[10px]">
                        <span className=" text-[#606060] w-16">
                            Client:
                        </span>
                        <span className="text-white">{project['client']}</span>
                    </div>
                    <div className="font-rubik flex items-center text-[10px]">
                        <span className=" text-[#606060] w-16">
                            Work:
                        </span>
						{
							project['work']?.map(work => 
								<span className="text-white pe-2" key={work} >{work}</span>
							)
						}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingProjectCatd;
