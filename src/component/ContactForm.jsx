import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "../utils/animations";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactForm() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-blue-50 to-white"
      id="contact"
    >
      <motion.h2
        className="text-3xl font-bold text-center text-blue-700 mb-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Have any questions? We’d love to hear from you! Reach out to our dental
        team anytime.
      </motion.p>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
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

        {/* Location */}
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
          <h3 className="font-semibold text-xl mb-2 text-gray-800">Location</h3>
          <p className="text-gray-600">Belqas, Mansoura, Egypt</p>
          <p className="text-gray-600">Building 12, Dental Plaza</p>
        </motion.div>
      </div>
    </section>
  );
}
