import Link from 'next/link';

export default function SchedulingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Online Appointment Scheduling</h1>
          <p className="text-lg">
            Schedule meetings efficiently with a robust and user-friendly tool.
          </p>
          <Link href="/get-started">
            <a className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100">
              Get Started
            </a>
          </Link>
        </div>
      </header>

     
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Take back your time with effortless scheduling
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Customizable Scheduling</h3>
              <p className="text-gray-600">
                Adjust your schedules to meet team and client requirements with ease.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Real-Time Notifications</h3>
              <p className="text-gray-600">
                Get instant updates on your schedule changes and bookings.
              </p>
            </div>
            
          </div>
        </div>
      </section>

     
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">And so much more...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p>
                Track and measure the effectiveness of your scheduling system.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Third-Party Integrations</h3>
              <p>
                Connect with tools like Google Calendar, Zoom, and Slack seamlessly.
              </p>
            </div>
            {/* Repeat additional feature blocks */}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join 12 Million Users
          </h2>
          <p className="text-gray-600 mb-6">
            Start scheduling smarter with our comprehensive tools.
          </p>
          <Link href="/signup">
            <a className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
              Get Started for Free
            </a>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Loved by Builders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add testimonials */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600">
                "Scheduling meetings has never been easier. This tool is a game-changer!"
              </p>
              <h3 className="mt-4 font-semibold">- Jane Doe</h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600">
                "The best scheduling app we’ve ever used. Highly recommended!"
              </p>
              <h3 className="mt-4 font-semibold">- John Smith</h3>
            </div>
           
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
