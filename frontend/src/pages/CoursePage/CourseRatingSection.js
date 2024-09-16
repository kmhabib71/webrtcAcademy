import React, { useState } from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const CourseRatingSection = ({ reviews }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    // Submit the rating and feedback logic
    console.log({ rating, feedback });
  };

  return (
    <section className="max-w-7xl mx-auto p-4 lg:p-8">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-xl font-bold">Rate This Course</h2>
        <div className="mt-4 flex items-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              className={`h-8 w-8 cursor-pointer ${
                rating >= star ? "text-yellow-400" : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
        <textarea
          className="w-full mt-4 p-2 border border-gray-300 rounded-lg"
          rows="4"
          placeholder="Leave your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}></textarea>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
          onClick={handleSubmit}>
          Submit Review
        </button>

        <div className="mt-8">
          <h2 className="text-xl font-bold">Course Reviews</h2>
          <div className="mt-4">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 rounded-lg p-4 mt-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}>
                <div className="flex items-center space-x-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-2 text-gray-600">{review.comment}</p>
                <p className="mt-2 text-sm text-gray-500">
                  Reviewed by {review.reviewerName}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CourseRatingSection;
