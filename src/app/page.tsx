import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-[#F472B6] text-white flex flex-col justify-center items-center">
        <div className="relative w-full h-[70vh]">
          <Image
            src="/image-home-hero-section.jpg"
            alt="Hero"
            layout="fill"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="mb-8"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Welcome to Lux Manor</h1>
            <p className="mt-4 text-lg text-black">Crafting luxurious spaces with elegance and style.</p>
            <Link href="/book">
              <button className="bg-[#F9A8D4] text-black px-4 py-2 rounded font-semibold hover:bg-[#FED7E2]">
                Discover Our Work
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full bg-[#F472B6] text-white flex flex-col justify-center items-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Lux Manor</h2>
        <p className="text-center max-w-2xl text-lg px-4">
          Lux Manor is dedicated to bringing your dream spaces to life with a penchant for elegance and luxury. Our team
          of skilled architects and designers work meticulously to create a perfect blend of style and functionality.
        </p>
        <Link href="/portfolio">
          <button className="mt-6 bg-[#F9A8D4] text-black px-6 py-3 rounded font-semibold hover:bg-[#FED7E2]">
            View Our Portfolio
          </button>
        </Link>
      </section>

      <Footer />
    </>
  );
}