import React, { useEffect } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface FPSGameProps {
  setShowFPSGame: (show: boolean) => void;
}

export function FPSGame({ setShowFPSGame }: FPSGameProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col">
      <Navigation setShowFPSGame={setShowFPSGame} />
      
      <main className="container mx-auto px-4 pt-32 flex-grow">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fadeIn">
            First Person Shooter Game
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 animate-slideUp animation-delay-200">
            A 3D first-person shooter featuring weapon mechanics and AI-controlled enemies.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">About the Project</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-6">
              This FPS game showcases advanced game development concepts including AI behavior, weapon systems, and player interactions. Key features include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Multiple weapon types with unique characteristics</li>
              <li>AI-controlled enemies with patrol and combat behaviors</li>
              <li>Dynamic combat system with hitboxes and damage calculation</li>
              <li>Interactive environment elements</li>
              <li>Health and ammunition management systems</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Developed in Unity with C#, this project demonstrates implementation of AI pathfinding, combat mechanics, and game state management.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-6">Gameplay Demo</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/your-fps-game-video-id"
                title="FPS Game Gameplay"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}