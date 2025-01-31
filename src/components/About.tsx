import React from 'react';
import { AppWindow, Palette, Figma, Cloudy } from 'lucide-react';

export function About() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <img
              src="https://github.com/ep-codes/eshanipatel/blob/main/busprof_portrait3.jpg?raw=true"
              alt="Professional Portrait"
              className="rounded-lg shadow-lg w-96 h-108"
            />
          </div>
          <div>
            <p className="text-gray-600 mb-6">
              Hi, I'm Eshani Patel! I'm currently a student at Georgia State University earning a Bachelors in Computer Science, expected to graduated May 2025. In addition to my studies, I'm double minoring in Film & Media and Game Design & Development, and obtaining a certificate in Cybersecurity. 
              Outside of my studies, I enjoy playing badminton, billiards, drawing and painting, and spending time with loved ones.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <AppWindow className="w-5 h-5 text-purple-500" />
                <span>Software Engineer/Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-purple-500" />
                <span>Graphic Design</span>
              </div>
              <div className="flex items-center gap-2">
                <Figma className="w-5 h-5 text-purple-500" />
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloudy className="w-5 h-5 text-purple-500" />
                <span>Cybersecurity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}