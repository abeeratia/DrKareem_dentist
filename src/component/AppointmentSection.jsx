import { motion } from "framer-motion";

export default function AppointmentSection() {
  return (
    <section className="py-20 bg-white text-center">
      <motion.h2
        className="text-3xl font-bold text-blue-600 mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Book an Appointment
      </motion.h2>
      <motion.form
        className="max-w-lg mx-auto bg-gray-50 shadow-md rounded-xl p-8"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <textarea
          placeholder="Message"
          rows="3"
          className="w-full p-3 mb-4 border rounded-lg"
        ></textarea>
        <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </motion.form>
    </section>
  );
}
