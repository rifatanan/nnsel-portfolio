import BackgroundRound from '@/components/BackgroundRound';
import LandingProjectCatd from './LandingProjectCatd';
import ButtonArrow from '@/components/ButtonArrow';
import Link from 'next/link';

const projects = [
    {
        name: 'Brand Journey Improvements',
        image: '/Images/Project/projectFront1.png',
        client: 'Organc',
        work: ['Branding', 'Logo design'],
    },
    {
        name: 'Brand Grouping',
        image: '/Images/Project/projectFront2.png',
        client: 'FR',
        work: ['Branding', 'Logo design'],
    },
    {
        name: 'Brand Suggestions',
        image: '/Images/Project/projectFront3.png',
        client: 'Rumanda',
        work: ['NFT Design'],
    },
    {
        name: 'NFT Glimps',
        image: '/Images/Project/projectFront4.png',
        client: 'T3d',
        work: ['NFT Logo'],
    },
];

const MyProject = () => {
    return (
        <div className='relative w-full h-fit'>
			<BackgroundRound top={'60px'} right={'80px'}/>
			<h1 className='grid grid-cols-1 text-center pt-[200px] pb-[40px] font-syne font-[700] text-[56px] leading-[76px] '>
				My Projects Highlight
			</h1>
			<Link href={'/projects'} className='flex justify-center pb-[100px]'>
				<ButtonArrow name={"Explore works"} borderSize={'1px'} borderColor={'#FF9143'}/>
			</Link>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-8 gap-y-20">
                {
				projects.map((project, index) => (
                    <LandingProjectCatd project={project} key={index} />
                ))}
            </div>
        </div>
    );
};

export default MyProject;
