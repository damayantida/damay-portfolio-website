import React from 'react';
import Hero from './sections/Hero';
import Header from './sections/Header';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
	return (
		<main className='relative min-h-full w-full overflow-x-hidden border-5 border-black'>
			<Header />
			<Hero />
			<AboutMe />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;
