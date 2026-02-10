import Hero from './sections/Hero';
import About from './sections/About';
import Courses from './sections/Courses';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Courses />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
