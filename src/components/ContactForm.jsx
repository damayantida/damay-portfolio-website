import { useState } from 'react';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [status, setStatus] = useState('');

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus('Sending...');

		const response = await fetch('https://formspree.io/f/myzkppqq', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData),
		});

		if (response.ok) {
			setStatus('Message sent successfully!');
			setFormData({ name: '', email: '', message: '' });
		} else {
			setStatus('Failed to send message. Try again later.');
		}

		// Remove status message after 5 seconds
		setTimeout(() => setStatus(''), 3000);
	};

	return (
		<div className='w-lg max-sm:w-sm max-md:md:w-md lg:w-lg'>
			<form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
				<input
					type='text'
					name='name'
					placeholder='Your Name'
					value={formData.name}
					onChange={handleChange}
					className='form'
					required
				/>
				<input
					type='email'
					name='email'
					placeholder='Your Email'
					value={formData.email}
					onChange={handleChange}
					className='form'
					required
				/>
				<textarea
					name='message'
					placeholder='Your Message'
					value={formData.message}
					onChange={handleChange}
					className='form h-32'
					required
				></textarea>
				<button
					type='submit'
					className='bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white py-2 px-4 rounded hover:bg-gray/90 font-medium transition'
				>
					Send Message
				</button>
			</form>
			{status && <p className='text-white mt-4'>{status}</p>}
		</div>
	);
}
