import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChatBubbleLeftEllipsisIcon,
  MagnifyingGlassIcon as SearchIcon,
} from "@heroicons/react/24/outline";

const QAPanel = ({ questions }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setFilteredQuestions(
      questions.filter((q) =>
        q.question.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <section className="max-w-7xl mx-auto p-4 lg:p-8">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Q&A Panel</h2>
          <div className="flex items-center space-x-2">
            <SearchIcon className="h-6 w-6 text-gray-500" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={handleSearch}
              className="border border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>

        <div className="mt-4">
          {filteredQuestions.map((q, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg p-4 mt-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-500" />
                  <h3 className="font-medium">{q.question}</h3>
                </div>
                <span className="text-gray-400">{q.upvotes} upvotes</span>
              </div>
              <p className="mt-2 text-gray-600">{q.answer}</p>
              <div className="mt-2 text-sm text-blue-500">
                {q.tags.map((tag, i) => (
                  <span key={i} className="mr-2">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default QAPanel;
