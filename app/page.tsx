import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "components/Button/Button";
import SlaterHeader from "components/Header/SlaterHeader";
import { LP_GRID_ITEMS } from "lp-items";

export const metadata: Metadata = {
  title: "SLaiTER - Software Consulting",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://slaiter.com/"
  },
};

export default function Web() {
  return (
    <div>
      <Head>
        <title>SLaiTER - Software Consulting</title>
        <meta name="description" content="Applied AI For Your Business." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <SlaterHeader />

        <section className="w-10/12 md:w-8/12 lg:w-6/12 my-12">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="md:w-1/2 p-4">
              <Image src="/Mission.jpeg" alt="Placeholder 3" width={800} height={621} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
              <p className="text-gray-700">At SLaiTER, we are committed to helping small and medium businesses scale effectively and efficiently through advanced software solutions. Our expertise ensures your business keeps pace with the rapid evolution of technology.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center mb-6">
            <div className="md:w-1/2 p-4">
              <Image src="/Services.png" alt="Placeholder 3" width={1912} height={1301} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-2">Our Services</h2>
              <p className="text-gray-700">We provide a range of consulting services including software development, system integration, and digital transformation. Our team of experts works closely with you to tailor solutions that meet your unique business needs.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="md:w-1/2 p-4">
              <Image src="/WhyUs.png" alt="Placeholder 3" width={1526} height={1283} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-2">Why Choose Us</h2>
              <p className="text-gray-700">Our proven track record in delivering successful projects, combined with our deep understanding of the software landscape, makes us the perfect partner to help you navigate and thrive in today's digital world.</p>
            </div>
          </div>
        </section>

        <footer className="w-full bg-blue-600 py-6">
        <div className="flex justify-center mb-4">
          <a href="https://www.linkedin.com/in/eric-slater-66377676" target="_blank" rel="noopener noreferrer" className="underline ml-2">
            <FontAwesomeIcon icon={faLinkedin} className="text-center mr-2 text-sm h-6"/>
          </a>
        </div>
        <p className="text-center text-white">© 2024 SLaiTER LLC. All rights reserved.</p>
        <p className="text-center text-white">🇺🇸 American Owned and Operated 🇺🇸</p>
      </footer>
      </main>
    </div>
  );
}