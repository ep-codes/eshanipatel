import React, { useEffect } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface BallGameProps {
  setShowBallGame: (show: boolean) => void;
}

export function BallGame({ setShowBallGame }: BallGameProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col">
      <Navigation setShowBallGame={setShowBallGame} />
      
      <main className="container mx-auto px-4 pt-32 flex-grow">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fadeIn">
            Ball Obstacle Game
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 animate-slideUp animation-delay-200">
            A 3D game created in Unity where players control a ball through challenging obstacle courses.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">About the Project</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-6">
              The Ball Obstacle Game is a challenging 3D platformer where players must navigate through increasingly difficult levels. Key features include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Physics-based ball movement and momentum mechanics</li>
              <li>Multiple challenging levels with unique obstacles</li>
              <li>Progressive difficulty scaling</li>
              <li>Time-based scoring system</li>
              <li>Dynamic camera following the ball</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Built using Unity and C#, this game demonstrates physics simulation, level design, and game mechanics implementation.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-6">Gameplay Demo</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://youtu.be/Px40XVm0dH4"
                title="Ball Game Gameplay"
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