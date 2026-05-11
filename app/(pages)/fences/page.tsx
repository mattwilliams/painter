import HeaderBrush from "@/app/components/HeaderBrush";

export default function Fences() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-obrien-black to-gray-800 text-obrien-white py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-start gap-8">
          <div className="md:w-[70%]">
            <h1 className="text-5xl font-bold mb-4">Fence Painting & Staining</h1>
            <p className="text-xl text-obrien-beige">
              Protect and enhance your outdoor spaces
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
              <h2 className="text-3xl font-bold mb-4 text-obrien-black">Fence Staining</h2>
              <p className="text-gray-600 mb-4">
                Bring out the natural beauty of your wood fence while providing lasting protection.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Semi-transparent stains</li>
                <li>Solid color stains</li>
                <li>Natural wood finishes</li>
                <li>UV and weather protection</li>
                <li>Long-lasting durability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-obrien-black">Fence Painting</h2>
              <p className="text-gray-600 mb-4">
                Give your fence a fresh look with premium quality paints that withstand the elements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Wood fence painting</li>
                <li>Vinyl fence cleaning & painting</li>
                <li>Metal fence finishing</li>
                <li>Moisture resistant coatings</li>
                <li>Rust prevention</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-obrien-black">Fence Preparation</h2>
              <p className="text-gray-600 mb-4">
                We handle all preparation to ensure the best possible finish.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Power washing</li>
                <li>Surface sanding</li>
                <li>Mold and mildew removal</li>
                <li>Old stain/paint removal</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-obrien-black text-obrien-white p-8 rounded text-center">
            <h3 className="text-2xl font-bold mb-4">Restore your fence today</h3>
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
