import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-500 text-white py-4">
        <div className="text-center text-xl font-bold">Header</div>
      </header>

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Announcement */}
        <div className="text-center mb-6">
          <div className="inline-block bg-gray-200 text-sm text-gray-700 py-1 px-3 rounded-full">
            <span className="font-semibold">New</span> How Pallet uses Webseeder
            to power their GTM →
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Customer relationship magic.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-4">
            Powerful, flexible, and data-driven, Webseeder makes it easy to
            build the exact CRM your business needs.
          </p>

          {/* Buttons */}
          <div className="flex justify-center mt-6 gap-4 flex-wrap">
            <button className="bg-black text-white py-2 px-6 rounded-md font-medium hover:bg-gray-800">
              Start for free
            </button>
            <button className="bg-gray-100 text-black py-2 px-6 rounded-md font-medium hover:bg-gray-200">
              Talk to sales
            </button>
          </div>
        </div>

        {/* CRM Preview */}
        <div className="mt-12 flex justify-center">
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
            <Image
              src="/crm.png"
              alt="CRM Preview"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </main>

      {/* Trusted Companies Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">
              Trusted by Many Established Companies
            </h1>
            <p className="text-gray-600 mt-2">
              20+ Businesses and Companies use Converge for their CRM Platform
            </p>
          </div>

          {/* Logos */}
          <div className="flex justify-center mb-16">
            <Image
              src="/Logo.png"
              alt="Trusted Companies Logos"
              width={300}
              height={80}
              className="opacity-80 hover:opacity-100 transition"
            />
          </div>

          {/* About Us Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 shadow-md rounded-lg">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src="/Rectangle 230.png"
                alt="Frustrated man"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-sm font-semibold text-blue-600 mb-2">
                ABOUT US
              </h3>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4 leading-tight">
                Do you keep getting frustrated with managing your client needs
                and employee deadlines?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Look no further, with our CRM lorem ipsum dolor sit amet
                consectetur adipisicing elit. Maxime mollitia, molestiae quas
                vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto
                fuga praesentium optio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI CRM Dashboard Section */}
      <section className="flex justify-center items-center my-12">
        <div className="w-full md:w-3/4 lg:w-2/3">
          <Image
            src="/Frame 235.png"
            alt="AI CRM Dashboard"
            width={800}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>

      <div className="flex justify-center mb-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </div>
      </div>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-2 items-center">
            <div className="flex justify-center">
              <Image
                src="/content 01.png"
                alt="Integrated with 60+ Apps"
                width={450}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/content 3.png"
                alt="We’re Aware with Security"
                width={450}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 py-16 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 mt-16">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold text-white">
            Ready to build your team’s dream CRM?
          </h2>
          <div className="mt-6 space-x-4">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold">
              Start for Free
            </button>
            <button className="bg-blue-700 text-white px-6 py-2 rounded-md font-semibold">
              Request a Demo
            </button>
          </div>
        </div>

        <div className="mt-6 lg:mt-0 lg:ml-8">
          <Image
            src="/Graphicss.png"
            alt="Graphics Illustration"
            width={350}
            height={350}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-800 text-white py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </footer>
    </div>
    
  );
}
