import Image from "next/image";
import HeaderBrush from "@/app/components/HeaderBrush";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-obrien-black to-gray-800 text-obrien-white py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-start gap-8">
          <div className="md:w-[70%]">
            <h1 className="text-5xl font-thin mb-4">About Obrien Painting</h1>
            <p className="text-xl text-obrien-beige">
              Quality craftsmanship and attention to detail
            </p>
          </div>
          <div className="md:w-[30%] flex justify-end md:pt-1">
            <HeaderBrush />
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-thin mb-4 text-obrien-black">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Obrien Painting has been serving the community with professional painting services for many years.
                We take pride in delivering exceptional results with every project, no matter the size.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Hello, my name is Brendan O'Brien, owner of O'Brien Painting LLC. I have lived and worked in Minneapolis my entire life, South and SE and Prospect Park mostly, and have have been painting and fixing homes in our neighborhoods since 1999. Five years ago I started my own business and have been growing each year since. I am also an artist and have extensive, formal training from the University of Minnesota in art, design, and color. This training has given me an attention to detail and an expert eye for color.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
              <h2 className="text-3xl font-thin mb-4 text-obrien-black">Our Commitment</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-obrien-beige font-bold">✓</span>
                  <span>Quality workmanship on every job</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-obrien-beige font-bold">✓</span>
                  <span>Professional, reliable team</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-obrien-beige font-bold">✓</span>
                  <span>Premium quality materials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-obrien-beige font-bold">✓</span>
                  <span>Attention to detail</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-obrien-beige font-bold">✓</span>
                  <span>Competitive pricing</span>
                </li>
              </ul>
              </div>
              <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                <Image
                  src="/about/splash.png"
                  alt="Brendan O'Brien with his truck"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-thin mb-4 text-obrien-black">Why Choose Us?</h2>
              <p className="text-gray-600 mb-4">
                We believe in building long-term relationships with our clients. That's why we go above and beyond
                to ensure complete satisfaction with every project.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-obrien-black text-obrien-white p-8 rounded text-center">
            <h3 className="text-2xl font-thin mb-4">Let's work together</h3>
            <a
              href="/contact"
              className="inline-block bg-obrien-beige text-obrien-black font-bold py-2 px-6 rounded hover:bg-white transition"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
