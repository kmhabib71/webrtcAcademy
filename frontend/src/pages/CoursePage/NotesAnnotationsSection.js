import React, { useState } from "react";
import { motion } from "framer-motion";
import { PencilIcon } from "@heroicons/react/24/solid";

const NotesAnnotationsSection = () => {
  const [notes, setNotes] = useState("");

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold">Notes & Annotations</h2>
        <p className="mt-4 text-lg text-gray-700">
          Take notes and add annotations directly to the lecture videos.
        </p>
      </motion.div>

      {/* Notes Section */}
      <motion.div
        className="bg-gray-100 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <h3 className="text-2xl font-semibold mb-4">Take Notes</h3>
        <textarea
          className="w-full p-4 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-600"
          rows="5"
          placeholder="Write your notes here..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </motion.div>

      {/* Annotations Section */}
      <motion.div
        className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        <h3 className="text-2xl font-semibold mb-4">Annotations</h3>
        <p className="text-gray-700">
          Add personal annotations to the lecture videos to highlight key
          concepts.
        </p>
        <button className="mt-4 bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-500 transition">
          Add Annotation
        </button>
      </motion.div>
    </section>
  );
};

export default NotesAnnotationsSection;
