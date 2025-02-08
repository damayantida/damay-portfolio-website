import { useState } from 'react';
import { myProjects } from '../constants';
import { Element } from 'react-scroll';

const projectCount = myProjects.length;

const Projects = () => {
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

	const currentProject = myProjects[selectedProjectIndex];

	const handleNavigation = (direction) => {
		setSelectedProjectIndex((prevIndex) => {
			if (direction === 'previous') {
				return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
			} else {
				return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
			}
		});
	};

	return (
		<Element name='projects'>
			<section className=' bg-blue-400 py-16 md:px-10 px-5 border-t-5 border-white text-white'>
				<div className='container px-6 flex flex-col items-center my-8'>
					<h2 className='text-4xl font-bold mb-8'>My Projects</h2>

					<div className=' bg-white text-black rounded-xl border-2 border-black p-8 lg:px-10 flex flex-col items-center justify-center'>
						<h3 className='text-2xl md:3xl font-medium mb-8 text-center'>
							{currentProject.title}
						</h3>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
							<div className='flex justify-center items-center'>
								<img
									src={currentProject.src}
									alt={currentProject.alt}
									className='project-img max-sm:max-w-sm w-full'
								/>
							</div>
							<div className='max-w-md flex flex-col justify-between'>
								<p className='text-lg max-sm:text-md text-justify'>
									{currentProject.desc}
								</p>
								<div className='flex items-end justify-between flex-wrap gap-5'>
									<div className='flex items-center gap-3'>
										<div className='flex flex-col mt-4'>
											<p className='text-sm'>Made with:</p>
											<div className='flex gap-2 mt-2'>
												{currentProject.tags.map((tag, index) => (
													<div key={index} className='tech-logo'>
														<img
															src={tag.path}
															alt={tag.name}
															className='w-8 h-8 max-md:w-6 max-md:h-6'
														/>
													</div>
												))}
											</div>
										</div>
									</div>
									<a
										href={currentProject.href}
										target='_blank'
										rel='noreferrer'
										className='flex items-center gap-2 cursor-pointer text-white-600'
									>
										<p>Check Live Site</p>
										<img
											src='/arrow-up-right.svg'
											className='w-4 h-4 max-sm:w-3 max-sm:h-3'
											alt='arrow'
										/>
									</a>
								</div>
							</div>
						</div>
						<div className='flex justify-between items-center mt-7 w-full'>
							<button
								className='arrow-btn'
								onClick={() => handleNavigation('previous')}
							>
								<img
									src='/arrow-left.svg'
									alt='left arrow'
									className='w-8 h-8 lg:w-10 lg:h-10 cursor-pointer'
								/>
							</button>
							<button
								className='arrow-btn'
								onClick={() => handleNavigation('next')}
							>
								<img
									src='/arrow-right.svg'
									alt='right arrow'
									className='w-8 h-8 lg:w-10 lg:h-10 cursor-pointer'
								/>
							</button>
						</div>
					</div>
				</div>
			</section>
		</Element>
	);
};

export default Projects;
