// app/page.tsx
import Navbar from './sections/navbar';
import Hero from './sections/hero';
import About from './sections/about';
import Projects from './sections/projects';
import Contact from './sections/contact';
import Footer from './sections/footer';

// By default this is a Server Component (good).
export default function Page() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
``
