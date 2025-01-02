import React from 'react';
import { Palette, Music, Award, BookOpen } from 'lucide-react';

export function About() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=800"
              alt="Workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-gray-600 mb-6">
              Hi, I'm Eshani Patel! I'm currently a student at Georgia State University earning a Bachelors in Computer Science, expected to graduated May 2025. In addition to my studies, I'm minoring in Film & Media and Game Design & Development, and obtaining a certificate in Cybersecurity. 
              Outside of my studies, I enjoy playing badminton, drawing and painting, and spending time with loved ones.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-purple-500" />
                <span>K-pop Enthusiast</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-purple-500" />
                <span>Digital Artist</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-500" />
                <span>Badminton Player</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-500" />
                <span>Lifelong Learner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}