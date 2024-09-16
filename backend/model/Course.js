const mongoose = require("mongoose");
// User Schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["student", "instructor", "admin"],
    default: "student",
  },
  profile: {
    firstName: String,
    lastName: String,
    avatar: String, // URL to profile picture
    bio: String,
    socialLinks: [
      {
        platform: String,
        url: String,
      },
    ],
  },
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  courseProgress: [
    {
      courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
      progress: { type: Number, default: 0 }, // Progress in percentage
      completedLectures: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Lecture" },
      ],
      achievements: [{ type: mongoose.Schema.Types.ObjectId, ref: "Badge" }],
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Course Schema
const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  modules: [
    {
      title: String,
      lectures: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lecture" }],
    },
  ],
  reviews: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      rating: { type: Number, required: true },
      comment: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
  badges: [{ type: mongoose.Schema.Types.ObjectId, ref: "Badge" }],
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Lecture Schema
const LectureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  videoUrl: { type: String, required: true }, // URL to video content
  resources: [
    {
      title: String,
      fileUrl: String, // URL to the resource file
    },
  ],
  quiz: [
    {
      question: String,
      options: [String],
      correctAnswer: String,
    },
  ],
  annotations: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      timestamp: { type: Number, required: true }, // Time in seconds within the video
      note: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Badge Schema
const BadgeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  imageUrl: String,
  criteria: String, // Description of how the badge is earned
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Blog/Insights Schema
const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Q&A Schema
const QASchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  lectureId: { type: mongoose.Schema.Types.ObjectId, ref: "Lecture" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  question: { type: String, required: true },
  answer: String,
  upvotes: { type: Number, default: 0 },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Job Roadmap Schema
const JobRoadmapSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  steps: [
    {
      title: String,
      content: String,
    },
  ],
  relatedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Business Solutions Schema
const BusinessSolutionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  features: [String],
  pricingOptions: [
    {
      planName: String,
      price: Number,
      featuresIncluded: [String],
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Register Schemas with Mongoose
mongoose.model("User", UserSchema);
mongoose.model("Course", CourseSchema);
mongoose.model("Lecture", LectureSchema);
mongoose.model("Badge", BadgeSchema);
mongoose.model("Blog", BlogSchema);
mongoose.model("QA", QASchema);
mongoose.model("JobRoadmap", JobRoadmapSchema);
mongoose.model("BusinessSolution", BusinessSolutionSchema);
