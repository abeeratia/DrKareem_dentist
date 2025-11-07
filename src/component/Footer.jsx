import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-100 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Clinic Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Kareem Dental Clinic
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Providing high-quality dental care and ensuring every patient leaves
            with a bright, confident smile.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-blue-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-300 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>

          <p className="text-gray-300 flex items-center gap-2">
            📍 Belqas, Mansoura, Egypt
          </p>

          <a
            href="tel:+201281172766"
            className="block text-gray-300 hover:text-blue-300 transition"
          >
            📞 +20 0128 117 2766
          </a>

          <a
            href="mailto:Kareem@gmail.com"
            className="block text-gray-300 hover:text-blue-300 transition"
          >
            📧 Kareem@gmail.com
          </a>
        </motion.div>
      </div>

      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-6 text-sm">
        © {new Date().getFullYear()} Kareem Dental Clinic — All Rights Reserved.
      </div>
    </footer>
  );
}
