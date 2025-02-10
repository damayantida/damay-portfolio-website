import ContactForm from '../components/ContactForm';
import { Element } from 'react-scroll';

const Contact = () => {
	return (
		<Element name='contact'>
			<section className='bg-gradient-to-t from-black to-gray-900 py-16 border-t border-white text-white'>
				<div className='container px-6 text-center flex flex-col items-center justify-center mt-8'>
					<h2 className='text-white text-3xl lg:text-4xl font-bold mb-8 lg:mb-10'>
						Contact Me
					</h2>
					<ContactForm />
				</div>
			</section>
		</Element>
	);
};

export default Contact;
