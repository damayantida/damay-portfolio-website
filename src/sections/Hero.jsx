import { Element } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
	return (
		<Element name='home'>
			<section className='relative pt-26 max-lg:py-24 max-md:py-18 bg-gradient-to-b from-black to-gray-900 h-screen w-full overflow-hidden text-white'>
				<div className='absolute w-full h-[150%] bg-gradient-to-b from-white to-gray-300 rotate-[10deg] -bottom-1/3 left-3/5 max-lg:hidden'></div>
				<div className='relative z-10 flex w-full container max-md:py-4'>
					<div className='w-3/5 max-md:w-full h-screen flex flex-col justify-center gap-6 max-md:gap-4 max-md:items-center'>
						<img
							src='/hero-photo.png'
							alt='photo'
							className='w-40 h-40 rounded-full object-cover md:hidden bg-gradient-to-t from-gray-400 to-gray-100 border-2 border-white mb-4 '
						/>
						<h3 className='text-3xl max-md:text-2xl max-sm:text-xl font-bold'>
							Hi, I am
						</h3>
						<h1 className='text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-bold leading-16 max-lg:leading-14 max-md:leading-10 max-sm:leading-8 max-md:text-center'>
							Damayanti Dwi Astuti
						</h1>
						<h5 className='text-xl max-md:text-lg max-sm:text-sm text-gray font-extrabold'>
							A Front End Developer
						</h5>
						<div className='flex gap-4'>
							{/* GitHub Button */}
							<a
								href='https://github.com/damayantida'
								target='_blank'
								rel='noopener noreferrer'
								className='w-12 max-md:w-10 h-12 max-md:h-10 flex items-center justify-center rounded-lg bg-gray-200 relative overflow-hidden shadow-inner transition-all duration-300 hover:bg-gray-300 active:bg-gray-400'
							>
								{/* Glossy Overlay */}
								<div className='absolute inset-0 bg-black opacity-20 mix-blend-overlay pointer-events-none' />
								<FaGithub className='text-black text-2xl max-md:text-xl' />
							</a>

							{/* LinkedIn Button */}
							<a
								href='https://www.linkedin.com/in/damayanti-dwi-astuti/'
								target='_blank'
								rel='noopener noreferrer'
								className='w-12 max-md:w-10 h-12 max-md:h-10 flex items-center justify-center rounded-lg bg-[#0A66C2] relative overflow-hidden shadow-inner transition-all duration-300 hover:bg-[#0957A2] active:bg-[#084285]'
							>
								<div className='absolute inset-0 bg-white opacity-10 mix-blend-overlay pointer-events-none' />
								<FaLinkedin className='text-white text-2xl max-md:text-xl' />
							</a>
						</div>
					</div>
					<div className='w-2/5 h-screen px-5 lg:absolute lg:bottom-0 lg:right-0 flex items-end justify-end max-lg:items-center max-lg:justify-center max-md:hidden'>
						<img
							src='/photo.png'
							alt='photo'
							className='max-w-[calc(100vh*(741/991))] w-full h-auto max-lg:hidden'
						/>
						<img
							src='/hero-photo.png'
							alt='photo'
							className='w-60 h-60 rounded-full object-cover bg-gradient-to-t from-gray-400 to-gray-100 border-2 border-white lg:hidden'
						/>
					</div>
				</div>
			</section>
		</Element>
	);
};

export default Hero;
