import React from "react";
import { motion } from "framer-motion";
import { StarIcon, PencilIcon } from "@heroicons/react/24/outline";

const ReviewsAndTestimonialsSection = ({ reviews = [] }) => {
  // Demo reviews data
  const demoReviews = [
    {
      name: "Jane Doe",
      rating: 5,
      review:
        "This course was amazing! I learned so much about WebRTC and the instructor was very clear.",
    },
    {
      name: "John Smith",
      rating: 4,
      review:
        "Great content, but I wish there were more examples. Overall, a very informative course.",
    },
    {
      name: "Alice Johnson",
      rating: 5,
      review:
        "Fantastic course! The hands-on projects really helped me understand the concepts.",
    },
  ];

  const reviewsToShow = reviews.length > 0 ? reviews : demoReviews;

  const overallRating = (
    reviewsToShow.reduce((acc, curr) => acc + curr.rating, 0) /
    reviewsToShow.length
  ).toFixed(1);

  return (
    <motion.div
      className="container mx-auto px-6 py-12 space-y-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}>
      {/* Section Heading */}
      <motion.div
        className="space-y-4 text-center lg:text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Student Reviews & Testimonials
        </h2>
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
          Hear from students who have taken this course.
        </p>
      </motion.div>

      {/* Overall Rating */}
      <motion.div
        className="flex items-center justify-center lg:justify-start space-x-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-6 w-6 ${
                i < Math.round(overallRating)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-xl lg:text-2xl font-semibold text-gray-900">
          {overallRating} out of 5
        </p>
        <p className="text-sm lg:text-base text-gray-600">
          ({reviewsToShow.length} reviews)
        </p>
      </motion.div>

      {/* Reviews */}
      <div className="space-y-8">
        {reviewsToShow.map((review, index) => (
          <motion.div
            key={index}
            className="border rounded-lg p-6 shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: index * 0.1,
            }}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg lg:text-xl font-semibold text-gray-900">
                {review.name}
              </h4>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${
                      i < review.rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700">{review.review}</p>
          </motion.div>
        ))}
      </div>

      {/* Write a Review Button */}
      <motion.div
        className="flex justify-center lg:justify-start mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}>
        <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-md font-semibold flex items-center space-x-2 hover:from-red-600 hover:to-pink-600 transition duration-300">
          <PencilIcon className="h-5 w-5" />
          <span>Write a Review</span>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ReviewsAndTestimonialsSection;
