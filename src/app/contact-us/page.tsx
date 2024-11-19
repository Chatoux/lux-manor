// pages/contact.js

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Image from 'next/image';

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="bg-primary lg:px-24 md:px-12 px-6 py-12 text-white flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Contact Lux Manor</h1>
        <p className="text-lg mb-8">
          At Lux Manor, we&apos;re always ready to showcase our work and share our expertise. Reach out to us
          for inquiries or schedule a consultation.
        </p>

        {/* Contact Form Section */}
        <div className="bg-secondary p-6 rounded-md shadow-md max-w-md w-full mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-accent">Get In Touch</h2>
          <form className="flex flex-col space-y-4">
            <input
              className="p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              className="p-2 border border-gray-300 rounded"
              type="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="p-2 border border-gray-300 rounded"
              placeholder="Your Message"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded hover:bg-accent transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Location and Details Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-3xl w-full mb-12">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
            <p className="text-lg mb-2">123 Lux Street, Manor City, LM 45678</p>
            <p className="text-lg mb-2">Phone: (123) 456-7890</p>
            <p className="text-lg">Email: contact@luxmanor.com</p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <Image
              src="/location-map.png"
              alt="Lux Manor Location"
              width={400}
              height={300}
              className="rounded shadow"
            />
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-accent text-center p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-black">Experience Luxury. Schedule Your Visit.</h2>
          <p className="mb-6 text-black">
            Discover what sets Lux Manor apart. Schedule a consultation or visit one of our ongoing projects.
          </p>
          <button className="bg-primary text-white py-2 px-6 rounded hover:bg-secondary transition-colors">
            Schedule Now
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}