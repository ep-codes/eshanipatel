import React from 'react';
import { Code, Palette, BookOpen } from 'lucide-react';

export function Skills() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Code className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Development</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Frontend Development</li>
              <li>React & Modern JavaScript</li>
              <li>Responsive Design</li>
              <li>UI/UX Principles</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Palette className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Creative Arts</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Digital Drawing</li>
              <li>Arts & Crafts</li>
              <li>Color Theory</li>
              <li>Creative Problem Solving</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <BookOpen className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Learning</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Quick Learner</li>
              <li>Adaptable</li>
              <li>Problem Solver</li>
              <li>Detail-Oriented</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}