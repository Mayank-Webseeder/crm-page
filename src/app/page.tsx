export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white py-4">
        <div className="text-center text-xl font-bold">Header</div>
      </header>

      {/* Section 1: Customer Relationship Magic */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
       
        <div className="text-center mb-6">
          <div className="inline-block bg-gray-200 text-sm text-gray-700 py-1 px-3 rounded-full">
            <span className="font-semibold">New</span> How Pallet uses Webseeder to power their GTM →
          </div>
        </div>

      
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          Customer relationship magic.
        </h1>
        <p className="text-center text-base sm:text-lg lg:text-xl text-gray-600 mt-4">
          Powerful, flexible and data-driven, Webseeder makes it easy to build the exact CRM your business needs.
        </p>

        
        <div className="flex justify-center mt-6 gap-4 flex-wrap">
          <button className="bg-black text-white py-2 px-6 rounded-md font-medium hover:bg-gray-800">
            Start for free
          </button>
          <button className="bg-gray-100 text-black py-2 px-6 rounded-md font-medium hover:bg-gray-200">
            Talk to sales
          </button>
        </div>

       
        <div className="mt-12 flex justify-center">
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
            <img
              src="/crm.png"
              alt="CRM Preview"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </main>

      {/* Section 2: A CRM Created to Be Your Own */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
            A CRM created to be your own.
          </h2>
          <p className="text-lg text-gray-600 text-center mt-4">
            Tweak anything and everything to ensure Webseeder fits your business, not the other way around.
          </p>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {/* Feature 1 */}
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">🔨</span>
              <div>
                <h3 className="font-semibold text-gray-800">Build</h3>
                <p className="text-sm text-gray-600">
                  Create your dream CRM with powerful, flexible templates for every use case.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">✨</span>
              <div>
                <h3 className="font-semibold text-gray-800">Refine</h3>
                <p className="text-sm text-gray-600">
                  Use Airtos intuitive UI and ultra-customizable blocks to craft your ideal workflows.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">🚀</span>
              <div>
                <h3 className="font-semibold text-gray-800">Work</h3>
                <p className="text-sm text-gray-600">
                  Help your business scale with enriched data, custom attributes, and integrations.
                </p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">📊</span>
              <div>
                <h3 className="font-semibold text-gray-800">Report</h3>
                <p className="text-sm text-gray-600">
                  Analyze, track, and share reports built on real-time data from across your workspace.
                </p>
              </div>
            </div>
          </div>

         
          <div className="mt-10 flex justify-center">
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
              <img
                src="/container.png"
                alt="CRM Customization"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Designed for Multiplayer */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
          Modeled around your data and workflows.
          </h2>
          <p className="text-lg text-gray-600 text-center mt-4">
          A CRM should go beyond deals. Webseeder is built for any business process.
          </p>

          

          
          <div className="mt-10 flex justify-center">
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
              <img
                src="/info.png"
                alt="Designed for Multiplayer"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
          Designed for Multiplayer.
          </h2>
          <p className="text-lg text-gray-600 text-center mt-4">
          The first Truly multiplayer CRM. After all, the best work does'nt come from silos.
          </p>

          

       
          <div className="mt-10 flex justify-center">
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
              <img
                src="/dev.png"
                alt="Designed for Multiplayer"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
    Trusted by the world's leading companies
  </h2>
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 items-center justify-center">
    
    <img src="/Coca Cola.png" alt="Coca Cola" className="h-12 mx-auto max-w-full" />
    <img src="/Open AI.png" alt="OpenAI" className="h-12 mx-auto max-w-full" />
    <img src="/Pallet.png" alt="Pallet" className="h-12 mx-auto max-w-full" />
    <img src="/causal.png" alt="Causal" className="h-12 mx-auto max-w-full" />
    <img src="/plain.png" alt="Plain" className="h-12 mx-auto max-w-full" />
    <img src="/passion.png" alt="Passionfroot" className="h-12 mx-auto max-w-full" />
    <img src="/DOPT.png" alt="Dopt" className="h-12 mx-auto max-w-full" />
    <img src="/Hyperline.png" alt="Hyperline" className="h-12 mx-auto max-w-full" />
    <img src="/deck.png" alt="On Deck" className="h-12 mx-auto max-w-full" />
    <img src="/bravado.png" alt="Bravado" className="h-12 mx-auto max-w-full" />
    <img src="/beacon.png" alt="Beacons" className="h-12 mx-auto max-w-full" />
  </div>
</div>

    </div>

     
      
     
    </div>
  );
}
