export default function Home() {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200">
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold">And so much more...</h1>
          <p className="text-lg mt-4 text-gray-400">
            Your customers are always connected. Why should your CRM be any different?
          </p>
        </section>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 md:px-16 py-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700"
            >
              <div className="mb-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-16 h-16 mx-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
  
        <footer className="bg-white text-gray-900 py-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          
            <div className="max-w-lg">
              <h2 className="text-2xl font-bold">Join 12 million users</h2>
              <p className="text-gray-600 mt-2">
                Who grow their business with WebSeeder
              </p>
              <div className="mt-6 space-x-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500">
                  Start for Free
                </button>
                <button className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600">
                  Talk to Sales
                </button>
              </div>
            </div>
  
            
            <div>
              <img
                src="/graphic.png"
                alt="Join 12 million users"
                className="w-80 h-auto"
              />
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
  const features = [
    {
      title: 'Quick Actions',
      description: 'Streamline your workflow with customizable shortcuts.',
      image: '/Quick actions.png', 
    },
    {
      title: 'Automatic Enrichment',
      description: 'Update your contacts with the latest information on autopilot.',
      image: '/Automatic enrichment.png', // Replace with your image path
    },
    {
      title: 'Chrome Extension',
      description: 'Stay lean with Attio’s lightweight browser extension.',
      image: '/Chrome extension.png', // Replace with your image path
    },
    {
      title: 'Contact Analysis',
      description: 'Get deeper insights into your contacts at a single glance.',
      image: '/Contact analysis.png', // Replace with your image path
    },
    {
      title: 'Filters',
      description: 'Streamline your workflow with customizable shortcuts.',
      image: '/Filters.png', // Replace with your image path
    },
    {
      title: 'Tiered Sorting',
      description: 'Update your contacts with the latest information on.',
      image: '/Tiered Sorting.png', // Replace with your image path
    },
  ];
  