import { Element, Link } from 'react-scroll';
import GlitchCTA from '../components/GlitchCTA';

const Hero = () => {
	return (
		<Element name='home'>
			<section className='relative pt-30 pb-20 max-lg:pt-26 max-lg:pb-18 max-md:pt-18 max-md:pb-16 bg-blue-400'>
				<div className='container flex justify-center'>
					<div className='w-120 max-sm:w-108 max-sm:h-96 h-107 bg-booting bg-contain bg-no-repeat relative'>
						<div className='flex flex-col justify-center items-center gap-2 absolute top-10 max-sm:top-1 left-1 max-sm:left-0 h-93 max-sm:h-86 w-108 max-sm:w-100'>
							<img
								src='/hero-computer.svg'
								alt='computer'
								className='w-50 mb-2 max-sm:w-30'
							/>
							<h1 className='text-4xl font-bold max-sm:text-2xl'>
								Hi, I'm Damay!
							</h1>
							<h1 className='text-3xl max-sm:text-xl font-bold'>
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
