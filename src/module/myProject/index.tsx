import BackgroundRound from '@/components/BackgroundRound';
import LandingProjectCatd from './LandingProjectCatd';

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
        client: 'Organc',
        work: ['Branding', 'Logo design'],
    },
    {
        name: 'Brand Suggestions',
        image: '/Images/Project/projectFront3.png',
        client: 'Organc',
        work: ['NFT Design'],
    },
    {
        name: 'NFT Glimps',
        image: '/Images/Project/projectFront4.png',
        client: 'Organc',
        work: ['NFT Logo'],
    },
];

const MyProject = () => {
    return (
        <div className=' relative'>
			<BackgroundRound top={'60px'} right={'80px'}/>
			<h1 className='grid grid-cols-1 font-syne font-[700] text-[56px] py-56 leading-[76px] text-center'>
			My Projects Highlight
			</h1>
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
