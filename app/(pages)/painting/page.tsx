import HeaderBrush from "@/app/components/HeaderBrush";

export default function Painting() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-obrien-black to-gray-800 text-obrien-white py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-start gap-8">
          <div className="md:w-[70%]">
            <h1 className="text-5xl font-bold mb-4">Interior & Exterior Painting</h1>
            <p className="text-xl text-obrien-beige">
              Transform your property with professional painting services
            </p>
          </div>
          <div className="md:w-[30%] flex justify-end md:pt-1">
            <HeaderBrush />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-obrien-black">Interior Painting</h2>
              <p className="text-gray-600 mb-4">
                We specialize in transforming interior spaces with careful attention to detail and quality finishes.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Living rooms and bedrooms</li>
                <li>Kitchens and bathrooms</li>
                <li>Accent walls and feature finishes</li>
                <li>Cabinet painting and refinishing</li>
                <li>Trim and baseboard work</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-obrien-black">Exterior Painting</h2>
              <p className="text-gray-600 mb-4">
                Protect and beautify your home's exterior with weather-resistant, long-lasting finishes.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Full home exterior painting</li>
                <li>Siding and shingle painting</li>
                <li>Door and window frames</li>
                <li>Deck staining and sealing</li>
                <li>Weather-resistant coatings</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-obrien-black text-obrien-white p-8 rounded text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to refresh your space?</h3>
            <a
              href="/contact"
              className="inline-block bg-obrien-beige text-obrien-black font-bold py-2 px-6 rounded hover:bg-white transition"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
