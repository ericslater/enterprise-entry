import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "lp-items"
import Head from "next/head";
import SlaterHeader from "components/Header/SlaterHeader";

export const metadata: Metadata = {
  title: "SLaiTER - Software Consulting",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://slaiter.com/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <div>
      <Head>
        <title>SLaiTER - Software Consulting</title>
        <meta name="description" content="Applied AI For Your Business." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* <header className="w-full bg-blue-600 py-6">
          <h1 className="text-4xl font-bold text-white text-center">SLaiTER</h1>
          <p className="text-xl text-white text-center">Applied AI For Your Business.</p>
        </header> */}
        <SlaterHeader />

        <section className="w-10/12 md:w-8/12 lg:w-6/12 my-12">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="md:w-1/2 p-4">
              <img src="/placeholder1.jpg" alt="Placeholder 1" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
              <p className="text-gray-700">At SLaiTER, we are committed to helping small and medium businesses scale effectively and efficiently through advanced software solutions. Our expertise ensures your business keeps pace with the rapid evolution of technology.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center mb-6">
            <div className="md:w-1/2 p-4">
              <img src="/placeholder2.jpg" alt="Placeholder 2" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-2">Our Services</h2>
              <p className="text-gray-700">We provide a range of consulting services including software development, system integration, and digital transformation. Our team of experts works closely with you to tailor solutions that meet your unique business needs.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="md:w-1/2 p-4">
              <img src="/placeholder3.jpg" alt="Placeholder 3" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-2">Why Choose Us</h2>
              <p className="text-gray-700">Our proven track record in delivering successful projects, combined with our deep understanding of the software landscape, makes us the perfect partner to help you navigate and thrive in today's digital world.</p>
            </div>
          </div>
        </section>

        <footer className="w-full bg-blue-600 py-6">
          <p className="text-center text-white">© 2024 SLaiTER. All rights reserved.</p>
          <p className="text-center text-white">🇺🇸 American Owned and Operated 🇺🇸</p>
          </footer>
      </main>
    </div>
  );
}
