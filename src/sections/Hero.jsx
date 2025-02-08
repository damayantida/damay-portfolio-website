import { Element, Link } from 'react-scroll';
import GlitchCTA from '../components/GlitchCTA';

const Hero = () => {
	return (
		<Element name='home'>
			<section className='relative pt-30 pb-20 max-lg:pt-26 max-lg:pb-18 max-md:pt-18 max-md:pb-16 bg-blue-400 flex items-center justify-center'>
				<div className='container flex justify-center'>
					<div className='w-90 h-90 sm:w-100 sm:h-100 md:w-120 md:h-120 bg-white flex flex-col justify-center items-center gap-3'>
						<img
							src='/hero-computer.svg'
							alt='computer'
							className='w-50 mb-2 max-sm:w-40'
						/>
						<h1 className='md:text-4xl font-bold sm:text-3xl text-2xl'>
							Hi, I'm Damay!
						</h1>
						<h1 className='text-xl md:text-3xl sm:text-2xl font-bold'>
							A Front End Developer
						</h1>
						<Link
							key='about'
							to='about'
							smooth={true}
							duration={500}
							className='mt-2'
						>
							<GlitchCTA />
						</Link>
					</div>
				</div>
			</section>
		</Element>
	);
};

export default Hero;
