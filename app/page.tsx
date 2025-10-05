"use client";

import { motion } from "framer-motion";

export default function Home() {
  const sentence = [
    "Hey,",
    "moi",
    "c’est",
    "<span class='text-blue-400'>Mathis</span>",
    "<span class='text-blue-400'>Heder</span>",
  ];

  return (
    <section className="hero-gradient min-h-screen flex flex-col justify-center items-center text-white text-center px-6">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15, 
            },
          },
        }}
      >
        {sentence.map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="inline-block mr-2"
            dangerouslySetInnerHTML={{ __html: word }}
          />
        ))}
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-zinc-400 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Développeur fullstack
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Voir mes projets
        </button>
        <button className="px-6 py-2 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition">
          Me contacter
        </button>
      </motion.div>
    </section>
  );
}
