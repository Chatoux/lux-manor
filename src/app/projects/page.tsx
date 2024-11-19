import React from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Image from 'next/image';

const Projects = () => {
  return (
    <>
      <Navbar />
      <main className="bg-primary text-white">
        <section className="flex flex-col items-center justify-center min-h-screen p-8 bg-primary">
          <h1 className="text-4xl font-bold mb-6">Lux Manor Projects</h1>
          <p className="text-lg text-center mb-8">
            Discover the elegance and innovation in our luxury home designs. At Lux Manor, we pride ourselves on crafting beautiful homes that blend seamlessly with their natural surroundings.
          </p>
        </section>

        <section id="gallery" className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-secondary text-center mb-12">Our Creations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Image
                src="/image-projects-gallery-section.jpg"
                alt="Lux Manor Gallery"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
              {/* Add more Image components as needed for additional gallery images */}
            </div>
          </div>
        </section>

        <section className="flex justify-center py-8 bg-accent">
          <div className="text-center text-textAccent">
            <h3 className="text-2xl font-semibold mb-4">Let's Build Your Dream Home</h3>
            <button className="px-8 py-4 mt-4 text-lg font-semibold bg-primary rounded-md hover:bg-textPrimary transition duration-300">
              Get in Touch
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;