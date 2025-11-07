import { motion } from "framer-motion";
import img from "../assets/img2.jpeg";
import { Link } from "react-router-dom";
export default function AboutSection() {
  return (
    <section className="py-16 bg-white text-gray-700 px-10 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src={img}
          alt="Dr. Kareem Mohamed"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Dr Kareem Mohamed
          </h2>
          <p className="mb-4">
            A passionate and professional dentist specialized in cosmetic and
            implant dentistry. With years of experience in delivering perfect
            smiles, Dr Kareem Mohamed ensures every patient feels confident
            and comfortable.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          <Link to="/about">
            Learn More
          </Link>
          </button>
          
        </motion.div>
      </div>
    </section>
  );
}
