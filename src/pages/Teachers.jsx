import React from 'react';
import { Mail, GraduationCap } from 'lucide-react';

export default function Teachers() {
  const teachers = [
    {
      id: 1,
      name: "Dr. Kamran Malik",
      role: "Head of Computer Science",
      qualification: "Ph.D. in Artificial Intelligence",
      experience: "12+ Years Experience",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Ayesha Khan",
      role: "Senior MERN Stack Instructor",
      qualification: "M.S. in Software Engineering",
      experience: "8+ Years Experience",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Zainab Raza",
      role: "Lead UI/UX Design Mentor",
      qualification: "B.Des from National College of Arts",
      experience: "6+ Years Experience",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">
            Our Faculty
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3 tracking-tight">
            Meet Our Expert Teachers
          </h1>
          <p className="text-slate-600 mt-4 text-base">
            Learn from industry mentors, researchers, and professional developers committed to your success.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div 
              key={teacher.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 group hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-square bg-slate-100">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover Overlay with Quick Contact Button */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={`mailto:${teacher.name.toLowerCase().replace('. ', '').replace(' ', '')}@edusphere.edu`}
                    className="flex items-center space-x-2 bg-white text-indigo-600 font-semibold px-4 py-2.5 rounded-xl shadow-lg hover:bg-indigo-600 hover:text-white transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contact Instructor</span>
                  </a>
                </div>
              </div>

              {/* Faculty Info Content */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">
                    {teacher.role}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-200">
                    {teacher.name}
                  </h3>
                </div>

                {/* Details List */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 text-sm text-slate-600">
                  <div className="flex items-start space-x-2.5">
                    <GraduationCap className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="leading-tight">{teacher.qualification}</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-indigo-600">Yr</span>
                    </div>
                    <span>{teacher.experience}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}