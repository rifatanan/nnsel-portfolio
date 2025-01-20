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
        <div className="container my-8">
			<div className='grid grid-cols-1 font-syne font-[700] text-[50px] py-56 text-center'>
			My Projects Highlight
			</div>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <LandingProjectCatd project={project} key={index} />
                ))}
            </div>
        </div>
    );
};

export default MyProject;
