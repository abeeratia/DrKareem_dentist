import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "../utils/animations";
import aboutImg from "../assets/img2.jpeg"; // غيّري الصورة حسب مجلدك

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-white text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* ---------- الصورة ---------- */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={aboutImg}
            alt="About our clinic"
            className="rounded-2xl shadow-xl w-full md:w-[90%]"
          />
        </motion.div>

        {/* ---------- النص ---------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-blue-700 mb-6">
            About Our Clinic
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-6">
            At{" "}
            <span className="font-semibold text-blue-600">
              Dr Kareem Mohamed Dental Clinic
            </span>
            , we are dedicated to providing exceptional dental care in a
            comfortable and friendly environment. Our team combines advanced
            technology with professional expertise to ensure every patient
            leaves with a confident smile.
          </p>

          <div className="space-y-6">
            <motion.div variants={fadeIn}>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as one of the top dental care providers in
                Egypt, known for excellence, innovation, and patient
                satisfaction.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to enhance lives through healthy, beautiful
                smiles. We aim to deliver personalized treatments that meet each
                patient’s unique dental needs using the latest technologies and
                gentle care.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ---------- إحصائيات بسيطة ---------- */}
      <motion.div
        className="mt-20 grid sm:grid-cols-3 gap-8 text-center max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {[
          { number: "10+", label: "Years of Experience" },
          { number: "1500+", label: "Happy Patients" },
          { number: "5+", label: "Professional Dentists" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg"
          >
            <h4 className="text-3xl font-bold text-blue-700">{stat.number}</h4>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
