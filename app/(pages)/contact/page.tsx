"use client";

import { useState } from "react";
import HeaderBrush from "@/app/components/HeaderBrush";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "painting",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", service: "painting", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-obrien-black to-gray-800 text-obrien-white py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-start gap-8">
          <div className="md:w-[70%]">
            <h1 className="text-5xl font-thin mb-4">Contact Us</h1>
            <p className="text-xl text-obrien-beige">
              Get your free quote today
            </p>
          </div>
          <div className="md:w-[30%] flex justify-end md:pt-1">
            <HeaderBrush />
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-thin mb-8 text-obrien-black">Get In Touch</h2>
            <p className="text-gray-600 mb-6">Brendan O'Brien</p>
            <div className="space-y-6">
              <div>
                <h3 className="font-thin text-lg text-obrien-black mb-2">Phone</h3>
                <p className="text-gray-600 font-mono">612.298.5187</p>
              </div>
              <div>
                <h3 className="font-thin text-lg text-obrien-black mb-2">Email</h3>
                <p className="text-gray-600 font-mono">obrienpainting55@gmail.com</p>
              </div>
              <div>
                <h3 className="font-thin text-lg text-obrien-black mb-2">Service Areas</h3>
                <p className="text-gray-600">
                  We serve the local community and surrounding areas. Contact us to see if we service your location.
                </p>
              </div>
              <div>
                <h3 className="font-thin text-lg text-obrien-black mb-2">Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-bold text-obrien-black mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-obrien-beige"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block font-bold text-obrien-black mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-obrien-beige"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block font-bold text-obrien-black mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-obrien-beige"
                  placeholder="Your phone"
                />
              </div>

              <div>
                <label className="block font-bold text-obrien-black mb-2">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-obrien-beige"
                >
                  <option value="painting">Interior/Exterior Painting</option>
                  <option value="fences">Fence Staining & Painting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-obrien-black mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-obrien-beige"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-obrien-black text-obrien-white font-bold py-3 rounded hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
