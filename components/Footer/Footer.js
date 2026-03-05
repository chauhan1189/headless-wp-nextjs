import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-[1300px] mx-auto px-4 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* About */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Your Company Name
            </h3>

            <p className="text-gray-400">
              We provide high-quality medical services with experienced
              specialists and modern healthcare technology.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">

              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/doctors">Doctors</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-lg font-semibold mb-4">
              Services
            </h3>

            <ul className="space-y-2 text-gray-400">

              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Orthopedics</li>
              <li>Pediatrics</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-semibold mb-4">
              Contact
            </h3>

            <ul className="space-y-2 text-gray-400">

              <li>123 Medical Street</li>
              <li>Berlin, Germany</li>
              <li>+49 123 456 789</li>
              <li>info@company.com</li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-gray-700 text-center py-6 text-gray-400">

        © {new Date().getFullYear()} Your Company Name. All rights reserved.

      </div>

    </footer>
  );
}