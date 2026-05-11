import Carousel from "@/app/components/Carousel";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <Carousel />

      {/* Call to Action Section */}
      <section className="bg-obrien-black text-obrien-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Professional Painting Services</h2>
          <p className="text-lg text-obrien-beige mb-8">
            Transform your space with expert craftsmanship. Interior, exterior, and fence painting.
          </p>
          <a
            href="/contact"
            className="inline-block bg-obrien-beige text-obrien-black font-bold py-3 px-8 rounded hover:bg-white transition"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-obrien-black">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-obrien-beige pl-6">
              <h3 className="text-2xl font-bold mb-2">Interior Painting</h3>
              <p className="text-gray-600">
                Beautiful finishes for living spaces, bedrooms, kitchens, and more.
              </p>
              <a href="/painting" className="text-obrien-beige hover:underline font-bold mt-4 inline-block">
                Learn More →
              </a>
            </div>
            <div className="border-l-4 border-obrien-beige pl-6">
              <h3 className="text-2xl font-bold mb-2">Fence Painting & Staining</h3>
              <p className="text-gray-600">
                Protect and beautify your fences with professional staining and painting.
              </p>
              <a href="/fences" className="text-obrien-beige hover:underline font-bold mt-4 inline-block">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
