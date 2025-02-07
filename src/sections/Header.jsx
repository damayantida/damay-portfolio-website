import { useState } from 'react';
import { Link } from 'react-scroll';
import { twMerge } from 'tailwind-merge';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='fixed top-0 left-0 z-50 w-full py-4 transition-all duration-500 bg-white border-5 border-black'>
			<div className='container mx-auto px-6 flex justify-between items-center'>
				{/* Logo */}
				<div className='text-xl font-bold'>Damay</div>

				{/* Desktop Menu */}
				<div className='hidden md:flex space-x-6'>
					{['home', 'about', 'projects', 'contact'].map((section) => (
						<Link
							key={section}
							to={section}
							smooth={true}
							duration={500}
							className='cursor-pointer hover:text-blue-500 transition'
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
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='feather feather-menu md:hidden'
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
				<div className='md:hidden bg-white border-t border-black mt-4'>
					<div className='flex flex-col items-center space-y-4 py-4'>
						{['home', 'about', 'projects', 'contact'].map((section) => (
							<Link
								key={section}
								to={section}
								smooth={true}
								duration={500}
								className='cursor-pointer hover:text-blue-500 transition'
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
