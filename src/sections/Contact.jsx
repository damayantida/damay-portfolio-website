import ContactForm from '../components/ContactForm';
import { Element } from 'react-scroll';

const Contact = () => {
	return (
		<Element name='contact'>
			<section className='bg-gray-800 py-16 px-10 border-t-5 border-white text-white'>
				<div className='container px-6 text-center flex flex-col items-center'>
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
