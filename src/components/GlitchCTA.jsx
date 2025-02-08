import { motion } from 'framer-motion';
import { useState } from 'react';

const GlitchCTA = (text) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.span
			className='text-lg sm:text-xl md:text-3xl font-mono uppercase tracking-widest cursor-pointer md:mt-4 mt-1'
			animate={{
				opacity: isHovered ? 1 : [1, 0, 1],
				color: isHovered ? '#000000' : '#5E5E5E',
			}}
			transition={{
				repeat: isHovered ? 0 : Infinity,
				duration: 0.3, // Faster blinking
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			PRESS START
		</motion.span>
	);
};

export default GlitchCTA;
