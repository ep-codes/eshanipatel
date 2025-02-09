import React, { useEffect } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface CrossMediaProps {
  setShowCrossMedia: (show: boolean) => void;
}

export function CrossMedia({ setShowCrossMedia }: CrossMediaProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navigation setShowCrossMedia={setShowCrossMedia} />
      
      <main className="container mx-auto px-4 py-32">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-10 animate-fadeIn">
            Cross Media Design Projects
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4 animate-slideUp animation-delay-200">
            A compilation of works including graphic design posters, concept sketches, moodboards, and contact sheets.
          </p>
        </header>

        <div className="bg-white rounded-lg shadow-lg p-4 mb-24">
          <div className="aspect-[16/9] w-full">
            <embed
              src="./assets/pdfs/Concept_Sketching.pdf"
              type="application/pdf"
              className="w-full h-full"
            />
          </div>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-24">
          <div className="rounded-lg shadow-md overflow-hidden group">
            <img
              src="./assets/images/CM4080_Figma1.png"
              alt="Design Concept 1"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="rounded-lg shadow-md overflow-hidden group">
            <img
              src="./assets/images/CM4080_Figma2.png"
              alt="Design Concept 2"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="rounded-lg shadow-md overflow-hidden group">
            <img
              src="./assets/images/CM4080_Figma3.png"
              alt="Design Concept 3"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="rounded-lg shadow-md overflow-hidden group">
            <img
              src="./assets/images/CM4080_Figma4.png"
              alt="Design Concept 4"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="rounded-lg shadow-md overflow-hidden group">
            <img
              src="./assets/images/PosterDesign.png"
              alt="Design Concept 5"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="rounded-lg shadow-md overflow-hidden group">
            <img
              src="./assets/images/ContactSheet-001.png"
              alt="Design Concept 5"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="rounded-lg shadow-md overflow-hidden group">
            <img
              src="./assets/images/ContactSheet-002.png"
              alt="Design Concept 6"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="rounded-lg shadow-md overflow-hidden group">
            <img
              src="./assets/images/ContactSheet-003.png"
              alt="Design Concept 6"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}