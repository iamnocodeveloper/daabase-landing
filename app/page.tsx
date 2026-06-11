import Hero from '@/components/Hero';
import Demo from '@/components/Demo';
import Benefits from '@/components/Benefits';
import Snippet from '@/components/Snippet';
import WaitlistForm from '@/components/WaitlistForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Demo />
      <Benefits />
      <Snippet />
      <WaitlistForm />
      <FAQ />
      <Footer />
    </main>
  );
}