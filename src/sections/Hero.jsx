import { Element, Link } from 'react-scroll';
import GlitchCTA from '../components/GlitchCTA';

const Hero = () => {
	return (
		<Element name='home'>
			<section className='relative pt-30 pb-20 max-lg:pt-26 max-lg:pb-18 max-md:pt-18 max-md:pb-16 bg-blue-400'>
				<div className='container flex justify-center'>
					<div className='w-120 max-sm:w-108 max-sm:h-96 h-107 bg-booting bg-contain bg-no-repeat relative'>
						<div className='flex flex-col justify-center items-center gap-2 absolute md:top-10 md:left-1 md:h-93 sm:h-86 w-108 sm:w-100 top-1 -left-10'>
							<img
								src='/hero-computer.svg'
								alt='computer'
								className='md:w-50 mb-2 max-sm:w-40 w-32'
							/>
							<h1 className='md:text-4xl font-bold sm:text-3xl text-2xl'>
								Hi, I'm Damay!
							</h1>
							<h1 className='md:text-3xl sm:text-2xl font-bold text-xl'>
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
				</div>
			</section>
		</Element>
	);
};

export default Hero;
