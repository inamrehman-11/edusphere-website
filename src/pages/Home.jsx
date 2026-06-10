import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80",
      title: "Empowering Minds, Shaping Futures",
      description: "Discover a world of world-class education with interactive courses designed by global experts.",
      ctaText: "Explore Courses",
      ctaLink: "/courses",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80",
      title: "Learn From The Best Educators",
      description: "Meet our highly qualified mentors dedicated to guiding you through your career pathway.",
      ctaText: "Meet Faculty",
      ctaLink: "/teachers",
      icon: <ArrowRight className="w-5 h-5" />
    },
    {
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80",
      title: "Join Upcoming Campus Events",
      description: "Stay updated with academic workshops, tech hackathons, and cultural seminars.",
      ctaText: "View Events",
      ctaLink: "/events",
      icon: <Calendar className="w-5 h-5" />
    }
  ];

  // Automatic slide transition (5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Slides Wrapper */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Dark Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-10000"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 mix-blend-multiply" />

          {/* Text Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl space-y-6 text-white md:pl-8">
                
                {/* Tagline Animation */}
                <p className={`text-indigo-400 font-bold tracking-widest uppercase transition-all duration-700 delay-300 transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  Welcome to EduSphere College
                </p>

                {/* Title Animation */}
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight transition-all duration-700 delay-500 transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {slide.title}
                </h1>

                {/* Description Animation */}
                <p className={`text-lg sm:text-xl text-slate-200 transition-all duration-700 delay-700 transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {slide.description}
                </p>

                {/* Button Animation */}
                <div className={`pt-4 transition-all duration-700 delay-900 transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <Link
                    to={slide.ctaLink}
                    className="inline-flex items-center space-x-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all group"
                  >
                    <span>{slide.ctaText}</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {slide.icon}
                    </span>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 backdrop-blur-md text-white p-3 rounded-full transition-all border border-white/10 focus:outline-none"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Slider Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 backdrop-blur-md text-white p-3 rounded-full transition-all border border-white/10 focus:outline-none"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-indigo-500' : 'w-2.5 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}