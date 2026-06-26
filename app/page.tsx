import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Pricing />
      <Features />
      <Footer />
    </main>
  );
}