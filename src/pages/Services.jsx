import { motion } from "framer-motion";
import {
  FaTooth,
  FaSmile,
  FaUserMd,
  FaTeethOpen,
  FaClinicMedical,
} from "react-icons/fa";

const services = [
  {
    icon: FaTooth,
    title: "Dental Cleaning",
    desc: "Professional cleaning for healthy and fresh teeth.",
  },
  {
    icon: FaSmile,
    title: "Cosmetic Dentistry",
    desc: "Get the perfect smile with modern cosmetic treatments.",
  },
  {
    icon: FaUserMd,
    title: "Implant Dentistry",
    desc: "High-quality dental implants for missing teeth.",
  },
  {
    icon: FaTeethOpen,
    title: "Braces & Alignment",
    desc: "Straighten your teeth with invisible aligners or braces.",
  },
  {
    icon: FaClinicMedical,
    title: "Emergency Dental Care",
    desc: "Immediate treatment for urgent dental problems.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <motion.h1
        className="text-4xl font-bold text-blue-600 mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Dental Services
      </motion.h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <service.icon className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
