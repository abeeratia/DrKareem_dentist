import { FaTooth, FaSmile, FaUserMd } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: FaTooth,
    title: "Teeth Whitening",
    desc: "Brighten your smile with our professional whitening service.",
  },
  {
    icon: FaSmile,
    title: "Cosmetic Dentistry",
    desc: "Enhance your smile aesthetics with advanced cosmetic techniques.",
  },
  {
    icon: FaUserMd,
    title: "Dental Implants",
    desc: "Replace missing teeth with durable and natural-looking implants.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <motion.h2
        className="text-3xl font-bold text-blue-600 mb-10"
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 px-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg p-8 rounded-2xl hover:shadow-2xl transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <service.icon className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
