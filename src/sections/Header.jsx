import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { twMerge } from 'tailwind-merge';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 z-50 w-full py-2 md:py-4 transition-all duration-50 ${
				scrolled || isOpen ? 'bg-gray-200' : 'bg-transparent'
			}`}
		>
			<div className='container mx-auto flex justify-between items-center'>
				{/* Logo */}
				<div
					className={`text-xl font-bold font-afacad ${
						scrolled || isOpen ? 'text-black' : 'text-white'
					}`}
				>
					damayCode
				</div>

				{/* Desktop Menu */}
				<div className='hidden lg:flex space-x-6 xl:space-x-7 text-black max-w-1/3'>
					{['home', 'about', 'projects', 'contact'].map((section) => (
						<Link
							key={section}
							to={section}
							smooth={true}
							duration={500}
							className='cursor-pointer hover:text-gray-600 font-montserrat font-bold text-sm transition'
						>
							{section.charAt(0).toUpperCase() + section.slice(1)}
						</Link>
					))}
				</div>

				{/* Mobile Menu Button */}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke={scrolled || isOpen ? 'black' : 'white'}
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='feather feather-menu lg:hidden'
					onClick={() => setIsOpen(!isOpen)}
				>
					<line
						x1='3'
						y1='6'
						x2='21'
						y2='6'
						className={twMerge(
							'origin-left transition',
							isOpen && 'rotate-45 -translate-y-1'
						)}
					></line>
					<line
						x1='3'
						y1='12'
						x2='21'
						y2='12'
						className={twMerge('transition', isOpen && 'opacity-0')}
					></line>
					<line
						x1='3'
						y1='18'
						x2='21'
						y2='18'
						className={twMerge(
							'origin-left transition',
							isOpen && '-rotate-45 translate-y-1'
						)}
					></line>
				</svg>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className='lg:hidden bg-gray-200 border-t border-black mt-4 text-black'>
					<div className='flex flex-col items-center space-y-4 py-4'>
						{['home', 'about', 'projects', 'contact'].map((section) => (
							<Link
								key={section}
								to={section}
								smooth={true}
								duration={500}
								className='cursor-pointer hover:text-gray-500 transition font-bold'
								onClick={() => setIsOpen(false)}
							>
								{section.charAt(0).toUpperCase() + section.slice(1)}
							</Link>
						))}
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
