import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Sustainability() {
  return (
    <>
      <Navbar />
      <main className="bg-primary text-white">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center p-8 bg-primary text-center">
          <h1 className="text-4xl font-bold mb-4">Sustainability at Lux Manor</h1>
          <p className="text-lg">
            At Lux Manor, we are committed to promoting sustainable living and showcasing our skills in eco-friendly design.
          </p>
        </section>

        {/* Eco-friendly Practices */}
        <section className="flex flex-col md:flex-row items-center justify-around py-12 px-8 bg-secondary text-black">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Eco-friendly Practices</h2>
            <p className="mb-4">
              Discover the eco-friendly construction methods and materials we use to minimize our environmental impact.
            </p>
            <Link href="/learn-more">
              <button className="bg-accent text-black py-2 px-4 rounded">Learn More</button>
            </Link>
          </div>
          <Image 
            src="/images/eco-friendly-construction.jpg" 
            alt="Eco-friendly Practices" 
            width={500} 
            height={300} 
            className="rounded shadow-lg"
          />
        </section>

        {/* Innovation in Design */}
        <section className="flex flex-col md:flex-row items-center justify-around py-12 px-8 bg-accent text-black">
          <Image 
            src="/images/innovation-design.jpg" 
            alt="Innovation in Design" 
            width={500} 
            height={300} 
            className="rounded shadow-lg"
          />
          <div className="mt-6 md:mt-0 md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Innovation in Design</h2>
            <p className="mb-4">
              Experience our innovative approaches to sustainable design, blending energy-efficient technologies with renewable resources.
            </p>
            <Link href="/our-approach">
              <button className="bg-secondary text-black py-2 px-4 rounded">Our Approach</button>
            </Link>
          </div>
        </section>

        {/* Impact Stories */}
        <section className="py-12 px-8 bg-primary text-white">
          <h2 className="text-3xl font-semibold text-center mb-8">Impact Stories</h2>
          <div className="flex flex-col md:flex-row items-center justify-around">
            <Image 
              src="/images/impact-story-1.jpg" 
              alt="Impact Story 1" 
              width={400} 
              height={250} 
              className="rounded shadow-lg mb-6 md:mb-0"
            />
            <div className="md:w-1/2">
              <p className="mb-4">
                Our designs have positively reshaped both environmental and client lifestyles, providing sustainable and stylish living.
              </p>
              <Link href="/success-stories">
                <button className="bg-accent text-black py-2 px-4 rounded">Read Stories</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}