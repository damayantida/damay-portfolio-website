import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaGit,
	FaGithub,
} from 'react-icons/fa'; // Importing icons

import {
	SiVite,
	SiNextdotjs,
	SiTailwindcss,
	SiFramer,
	SiThreedotjs,
	SiTypescript,
	SiVuedotjs,
} from 'react-icons/si';
import { Element } from 'react-scroll';

const AboutMe = () => {
	return (
		<section
			id='about'
			className='py-16 bg-gradient-to-t from-black to-gray-900 border-t lg:border-t-2 max-md:border-0 border-white'
		>
			<Element name='about'>
				<div className='container px-6 text-center flex flex-col items-center my-8'>
					{/* Title */}
					<h2 className='text-4xl font-bold text-white mb-8'>Who Am I?</h2>

					{/* Description */}
					<p className='text-lg text-white mb-12 w-[60%] max-md:w-[80%]'>
						I’m Damayanti Dwi Astuti, a front-end developer who loves learning
						and creating things with code. I’m passionate about building
						websites that are not only functional but also visually appealing.
						While I’m still growing my skillset, I’m excited to keep improving
						and take on new challenges as I build my career in web development.
					</p>

					{/* Skills Section */}
					<h3 className='text-3xl font-medium text-white mb-8'>My Skills</h3>
					<div className='skills-container grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6'>
						<div className='skill'>
							<FaHtml5 className='text-4xl mx-auto mb-2' />
							<p className='skill-text'>HTML</p>
						</div>
						<div className='skill'>
							<FaCss3Alt className='text-4xl mx-auto mb-2' />
							<p className='skill-text'>CSS</p>
						</div>
						<div className='skill'>
							<FaJs className='text-4xl mx-auto mb-2' />
							<p className='skill-text'>JavaScript</p>
						</div>
						<div className='skill'>
							<SiTypescript className='text-4xl mx-auto mb-2' />
							<p className='skill-text'>TypeScript</p>
						</div>

						<div className='skill'>
							<FaReact className='text-4xl mx-auto mb-2' />
							<p className='skill-text'>React</p>
						</div>
						<div className='skill'>
							<SiVuedotjs className='text-4xl mx-auto mb-2' />
							<p className='skill-text'>Vue</p>
						</div>
						<div className='skill'>
							<SiVite className='text-4xl mx-auto mb-2' />
							<p className='skill-text'>Vite</p>
						</div>
						<div className='skill'>
							<SiNextdotjs className='text-4xl mx-auto mb-2' />
							<p className='skill-text'>Next.js</p>
						</div>
						<div className='skill'>
							<SiTailwindcss className='text-4xl mx-auto mb-2' />
							<p className='skill-text'>Tailwind CSS</p>
						</div>

						<div className='skill'>
							<SiFramer className='text-4xl mx-auto mb-2' />
							<p className='skill-text'>Framer Motion</p>
						</div>
						<div className='skill'>
							<SiThreedotjs className='text-4xl mx-auto mb-2' />
							<p className='skill-text'>Three.js (Basic)</p>
						</div>
						<div className='skill'>
							<FaGit className='text-4xl mx-auto mb-2' />
							<p className='skill-text'>Git</p>
						</div>
						<div className='skill'>
							<FaGithub className='text-4xl mx-auto mb-2' />
							<p className='skill-text'>Github</p>
						</div>
					</div>
				</div>
			</Element>
		</section>
	);
};

export default AboutMe;
