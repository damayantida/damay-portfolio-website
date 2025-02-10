import ContactForm from '../components/ContactForm';
import { Element } from 'react-scroll';

const Contact = () => {
	return (
		<section className='bg-gradient-to-t from-black to-gray-900 py-16 border-t border-white text-white'>
			<Element name='contact'>
				<div className='container px-6 text-center flex flex-col items-center justify-center mt-8 w-screen'>
					<h2 className='text-white text-3xl lg:text-4xl font-bold mb-8 lg:mb-10'>
						Contact Me
					</h2>
					<ContactForm />
				</div>
			</Element>
		</section>
	);
};

export default Contact;
