import { motion } from "framer-motion";
import heroBg from "../assets/1.jpg";
import doctorImg from "../assets/d65c1749-c6a5-4d2a-89f2-c26a7919e047.jpeg";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
      <motion.img
        src={doctorImg}
        alt="Dr. Smile"
        className=" w-75 h-75 rounded-full z-10 border-4 border-white mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1
        className="text-black text-5xl font-bold z-10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Dr Kareem Mohamed 
      </motion.h1>
      <motion.p
        className="text-black text-xl mt-3 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Providing excellence in dental care and beautiful smiles.
      </motion.p>
    </section>
  );
}
