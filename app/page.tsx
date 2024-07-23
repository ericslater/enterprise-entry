import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import SlaterHeader from "components/Header/SlaterHeader";

export const metadata: Metadata = {
  title: "SLaiTER - Software Consulting",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://slaiter.com/"
  },
  description: "Applied AI For Your Business.",
  icons: [ "/favicon.ico" ],
};

export default function Web() {
  return (
    <div className="bg-background text-text">
      <Head>
        <title>SLaiTER - Software Consulting</title>
        <meta name="description" content="Applied AI For Your Business." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen">
        <SlaterHeader />

        <section className="w-11/12 md:w-10/12 lg:w-8/12 my-16">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-secondary">Our Mission</h2>
              <p className="text-lg">At SLaiTER, we empower small and medium businesses with cutting-edge software solutions. Our expertise ensures your business stays ahead in the rapidly evolving technological landscape.</p>
            </div>
            <div className="order-first md:order-last">
              <Image src="/Mission.jpeg" alt="Our Mission" width={800} height={621} className="w-full h-auto rounded-lg shadow-xl" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="order-last md:order-first">
              <Image src="/Services.png" alt="Our Services" width={1912} height={1301} className="w-full h-auto rounded-lg shadow-xl" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-secondary">Our Services</h2>
              <p className="text-lg">We offer a comprehensive range of consulting services, including bespoke software development, seamless system integration, and transformative digital strategies. Our team of experts collaborates closely with you to craft solutions that precisely address your unique business challenges.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-secondary">Why Choose Us</h2>
              <p className="text-lg">With a proven track record of successful projects and a deep understanding of the software landscape, we are your ideal partner in navigating and thriving in the digital world. Our commitment to excellence and innovation sets us apart.</p>
            </div>
            <div className="order-first md:order-last">
              <Image src="/WhyUs.png" alt="Why Choose Us" width={1526} height={1283} className="w-full h-auto rounded-lg shadow-xl" />
            </div>
          </div>
        </section>
        <footer className="w-full bg-primary py-8">
          <p className="text-center text-text text-sm">© 2024 SLaiTER LLC. All rights reserved.</p>
          <p className="text-center text-text text-sm mt-2 mb-4">🇺🇸 American Owned and Operated 🇺🇸</p>
          <div className="flex justify-center mb-4">
            <a 
              href="https://www.linkedin.com/in/eric-slater-66377676" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent hover:text-secondary transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}