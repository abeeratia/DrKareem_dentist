import { motion } from "framer-motion";
import img1 from "../assets/a.jpeg";
import img2 from "../assets/b.jpeg";
import img3 from "../assets/c.jpeg";
const articles = [
  {
    title: "The Importance of Oral Hygiene",
    image: img1,
    date: "Oct 20, 2025",
  },
  {
    title: "Implant Dentistry Innovations",
    image: img2,
    date: "Oct 22, 2025",
  },
  {
    title: "How to Maintain a Perfect Smile",
    image: img3,
    date: "Oct 25, 2025",
  },
];

export default function ArticlesSection() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <motion.h2
        className="text-3xl font-bold text-blue-600 mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Dental Articles
      </motion.h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 px-10">
        {articles.map((a, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <img
              src={a.image}
              alt={a.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">{a.title}</h3>
              <p className="text-gray-500 text-sm">{a.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
