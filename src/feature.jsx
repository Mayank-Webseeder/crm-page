import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Efficient form creation with a powerful form builder</h1>
          <p className="text-lg">Create, customize, and integrate forms with ease.</p>
          <Link href="/previous-page">
            <a className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100">
              Get Started
            </a>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Create visually appealing forms</h2>
            <p className="text-gray-600 mt-4">Drag and drop components to design forms effortlessly.</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Collect data from a range of sources</h2>
            <p className="text-gray-600 mt-4">Integrate with third-party services to streamline workflows.</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Stay informed with instant notifications</h2>
            <p className="text-gray-600 mt-4">Get real-time updates on form submissions.</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold">View, analyze, and optimize data</h2>
            <p className="text-gray-600 mt-4">Leverage built-in analytics for insights.</p>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Send data to your favorite apps with form integrations</h2>
          <p className="text-gray-600 mb-8">Easily connect with tools like Slack, Microsoft, Google, and more.</p>
          <div className="flex justify-center gap-6">
            <img src="/Microsoft.png" alt="Microsoft" className="h-12" />
            <img src="slack.png" alt="Slack" className="h-12" />
            <img src="/Group 246.png" alt="Google" className="h-12" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">See what our trusted users say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600">"This tool has transformed the way we work with forms."</p>
              <h3 className="mt-4 font-semibold">- John Doe</h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600">"Amazing integrations and super easy to use!"</p>
              <h3 className="mt-4 font-semibold">- Jane Smith</h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600">"Highly recommended for teams and organizations."</p>
              <h3 className="mt-4 font-semibold">- Emily Davis</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
