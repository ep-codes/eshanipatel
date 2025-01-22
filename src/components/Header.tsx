import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="container mx-auto px-4 py-60 md:py-72">
      <div className="text-center animate-fadeIn">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 animate-slideUp">
          Eshani Patel
        </h1>
        <p className="text-3xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slideUp animation-delay-200">
          Software Engineer | Graphic Designer | UI/UX
        </p>
        <div className="flex justify-center gap-4 animate-slideUp animation-delay-400">
          <a href="https://github.com/ep-codes" 
             className="text-gray-600 hover:text-gray-900 transition-all hover:scale-110">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/eshani-patel/" 
             className="text-gray-600 hover:text-gray-900 transition-all hover:scale-110">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="mailto:eshani2020@gmail.com" 
             className="text-gray-600 hover:text-gray-900 transition-all hover:scale-110">
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
    </header>
  );
}