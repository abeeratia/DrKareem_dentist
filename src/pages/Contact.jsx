import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "../utils/animations";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="pt-28 pb-20 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-center text-blue-700 mb-8"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        Get In Touch
      </motion.h1>

      <motion.p
        className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        We’re here to answer your questions and provide expert dental advice.
        Reach out to us through any of the following ways.
      </motion.p>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {/* Phone */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4 text-blue-600 text-3xl">
            <FaPhoneAlt />
          </div>
          <h3 className="font-semibold text-xl mb-2 text-gray-800">Phone</h3>
          <a
            href="tel:+201281172766"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            +20 0128 117 2766
          </a>
        </motion.div>

        {/* Email */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4 text-blue-600 text-3xl">
            <FaEnvelope />
          </div>
          <h3 className="font-semibold text-xl mb-2 text-gray-800">Email</h3>
          <a
            href="mailto:info@kareem.com"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            info@kareem.com
          </a>
        </motion.div>

        {/* Address */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4 text-blue-600 text-3xl">
            <FaMapMarkerAlt />
          </div>
          <h3 className="font-semibold text-xl mb-2 text-gray-800">Address</h3>
          <p className="text-gray-600">Belqas, Mansoura, Egypt</p>
        </motion.div>

        {/* Working Hours */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4 text-blue-600 text-3xl">
            <FaClock />
          </div>
          <h3 className="font-semibold text-xl mb-2 text-gray-800">
            Working Hours
          </h3>
          <p className="text-gray-600">Sat - Thu: 9:00 pm - 12:00 PM</p>
          <p className="text-gray-600">Friday: Closed</p>
        </motion.div>
      </div>

      {/* Social Media */}
      <motion.div
        className="mt-16 text-center"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
        <div className="flex justify-center gap-6 text-blue-600 text-2xl">
          <a href="#" className="hover:scale-110 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:scale-110 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:scale-110 transition">
            <FaTwitter />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
