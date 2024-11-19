import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

export default function AboutUs() {
    return (
        <>
            <Navbar />
            <main>
                {/* Mission Statement Section */}
                <section className="bg-primary text-text_primary py-16 px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-lg">
                            At Lux Manor, we are committed to pioneering eco-friendly building practices that harmonize with nature. Our passion lies in creating sustainable architectures that blend seamlessly with the natural environment, promoting both modern elegance and ecological responsibility.
                        </p>
                    </div>
                </section>

                {/* Our Team Section */}
                <section className="w-full bg-primary text-text_primary flex flex-col justify-center items-center">
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
                            <h1 className="text-4xl md:text-5xl font-bold text-text_primary">Welcome to Lux Manor</h1>
                            <p className="mt-4 text-lg text-text_secondary">
                                Experience the seamless blend of innovation and nature in every project we undertake.
                            </p>
                            <Link href="/portfolio">
                                <button className="bg-secondary text-text_accent px-4 py-2 rounded font-semibold hover:bg-accent">
                                    Explore Our Work
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Client Testimonials Section */}
                <section className="bg-secondary text-text_primary py-16">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-semibold text-text_accent">Client Testimonials</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-around">
                        <div className="p-6 max-w-md bg-white rounded shadow-md text-center mb-6 lg:mb-0">
                            <p className="text-text_secondary">&quot;Working with Lux Manor transformed our vision into a stunning reality!&quot;</p>
                            <span className="block mt-4 text-text_accent">- Eco-Conscious Client</span>
                        </div>
                        <div className="p-6 max-w-md bg-white rounded shadow-md text-center">
                            <p className="text-text_secondary">&quot;Lux Manor&apos;s innovative designs exceeded our expectations!&quot;</p>
                            <span className="block mt-4 text-text_accent">- Happy Architect</span>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}