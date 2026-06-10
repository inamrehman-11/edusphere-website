import React from 'react';
import { BookOpen, Clock, Users, ArrowRight, Star } from 'lucide-react';

export default function Courses() {
  const coursesData = [
    {
      id: 1,
      title: "Full-Stack MERN Development",
      category: "Web Development",
      rating: 4.9,
      reviews: 120,
      duration: "16 Weeks",
      students: "1,200+",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
      description: "Master MongoDB, Express, React, and Node.js. Build production-ready scalable applications from scratch.",
      features: ["Live Coding Sessions", "1-on-1 Mentorship", "10+ Real-world Projects"]
    },
    {
      id: 2,
      title: "Advanced Next.js & Tailwind CSS",
      category: "Frontend Architecture",
      rating: 4.8,
      reviews: 85,
      duration: "8 Weeks",
      students: "850+",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      description: "Deep dive into Server Actions, SSR, ISR, and dynamic routing while building beautiful mobile-first layouts.",
      features: ["SEO Optimization", "Performance Tuning", "Deploying to Vercel"]
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      category: "Design",
      rating: 4.7,
      reviews: 95,
      duration: "10 Weeks",
      students: "900+",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80",
      description: "Learn Figma wireframing, prototyping, and user psychology to create interfaces that users love.",
      features: ["Portfolio Building", "Figma Components Pro", "User Testing Methods"]
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">
            Our Programs
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3 tracking-tight">
            Explore Our Interactive Courses
          </h1>
          <p className="text-lg text-slate-600 mt-4">
            Expand your skills with specialized tracks taught by industry experts. Hover over any card to reveal syllabus features.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 transition-all duration-500 flex flex-col transform hover:-translate-y-2"
            >
              {/* Image Container with Tag */}
              <div className="relative overflow-hidden aspect-video shrink-0">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-indigo-600 text-white font-semibold text-xs px-3 py-1.5 rounded-lg shadow-md">
                  {course.category}
                </span>
              </div>

              {/* Card Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Rating & Stats */}
                <div className="flex items-center space-x-1 text-amber-500 text-sm font-bold mb-3">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <span>{course.rating}</span>
                  <span className="text-slate-400 font-normal">({course.reviews} reviews)</span>
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
                  {course.title}
                </h3>

                {/* Base Description */}
                <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                  {course.description}
                </p>

                {/* Key Meta Details (Always Visible) */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-4 text-xs font-semibold text-slate-500">
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-4 h-4 text-indigo-500" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Users className="w-4 h-4 text-emerald-500" />
                    <span>{course.students} Students</span>
                  </div>
                </div>

                {/* DYNAMIC HOVER EXTENSION (Expands on Hover) */}
                <div className="max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden pt-0 group-hover:pt-4 border-t border-dashed border-slate-200 mt-0 group-hover:mt-4">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    What you will learn:
                  </h4>
                  <ul className="space-y-1.5">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="mt-6">
                  <button className="w-full bg-slate-50 group-hover:bg-indigo-600 text-slate-800 group-hover:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm shadow-sm group-hover:shadow-lg group-hover:shadow-indigo-600/30">
                    <span>Enroll Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}