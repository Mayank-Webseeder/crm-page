// pages/index.js
export default function testimonial() {
    return (
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Efficient form creation with a powerful form builder</h1>
            <p className="text-lg text-gray-600 mb-6">Easily create, manage, and optimize your forms.</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Get Started</button>
          </div>
        </section>
  
        {/* Features Section */}
        <section className="py-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Create visually appealing forms</h2>
              <p className="text-gray-600">Choose from a range of templates and customize effortlessly.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Collect data from a range of sources</h2>
              <p className="text-gray-600">Integrate with various apps to streamline data collection.</p>
            </div>
          </div>
        </section>
  
        {/* Notifications Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay informed with instant notifications</h2>
            <p className="text-gray-600">Receive updates and alerts directly to your inbox or phone.</p>
          </div>
        </section>
  
        {/* Integrations Section */}
        <section className="py-12 bg-blue-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Send data to your favorite apps with form integrations</h2>
            <p>Integrate with tools like Slack, Google Sheets, and more.</p>
          </div>
        </section>
  
        {/* Analytics Section */}
        <section className="py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">View, analyze, and optimize data</h2>
            <p className="text-gray-600">Access powerful analytics to make informed decisions.</p>
          </div>
        </section>
  
        {/* Sponsors Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Our Sponsors</h2>
            <div className="flex justify-center space-x-8">
              <img src="/apple-logo.png" alt="Apple" className="h-12" />
              <img src="/microsoft-logo.png" alt="Microsoft" className="h-12" />
              <img src="/slack-logo.png" alt="Slack" className="h-12" />
              <img src="/google-logo.png" alt="Google" className="h-12" />
            </div>
          </div>
        </section>
  
        {/* Testimonials Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">See what our trusted users say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-100 rounded-lg text-center">
                <p>"Amazing tool! Streamlined our data collection process."</p>
                <p className="mt-4 font-bold">- User A</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg text-center">
                <p>"The best form builder I've ever used."</p>
                <p className="mt-4 font-bold">- User B</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg text-center">
                <p>"Great integrations and fantastic support."</p>
                <p className="mt-4 font-bold">- User C</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  