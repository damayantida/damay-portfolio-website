import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='bg-black text-white py-6 border-t border-gray-700'>
			<div className='container mx-auto flex flex-col items-center space-y-4'>
				<p className='text-sm'>
					&copy; {new Date().getFullYear()} Damayanti Dwi Astuti. All rights
					reserved.
				</p>

				{/* Social Media Icons */}
				<div className='flex space-x-6'>
					<a
						href='https://github.com/damayantida'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-400 hover:text-white transition'
					>
						<FaGithub size={24} />
					</a>
					<a
						href='https://www.linkedin.com/in/damayanti-dwi-astuti/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-400 hover:text-white transition'
					>
						<FaLinkedin size={24} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
