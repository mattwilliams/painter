export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obrien-black text-obrien-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="font-bold text-lg mb-3 text-obrien-beige">Obrien Painting</h4>
            <p className="text-gray-300 text-sm">
              Professional painting services for homes and businesses since [YEAR].
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-3 text-obrien-beige">Quick Links</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <a href="/" className="hover:text-obrien-beige transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/painting" className="hover:text-obrien-beige transition">
                  Painting Services
                </a>
              </li>
              <li>
                <a href="/fences" className="hover:text-obrien-beige transition">
                  Fence Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-obrien-beige transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-3 text-obrien-beige">Contact</h4>
            <p className="text-gray-300 text-sm mb-2">
              Phone: <span className="font-mono">[PLACEHOLDER]</span>
            </p>
            <p className="text-gray-300 text-sm">
              Email: <span className="font-mono">[PLACEHOLDER]</span>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Obrien Painting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
