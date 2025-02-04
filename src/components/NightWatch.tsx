import React from 'react';
import { Navigation } from './Navigation';

interface NightWatchProps {
  setShowNightWatch: (show: boolean) => void;
}

export function NightWatch({ setShowNightWatch }: NightWatchProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navigation setShowNightWatch={setShowNightWatch} />
      
      <main className="container mx-auto px-4 pt-32">
        <header className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fadeIn">
            Night Watch
          </h1>
        </header>

        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-6">
            My first official UI/UX Design project submitted to Rice Design-a-thon 2025:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Create customizable watchlists for movies and shows they want to watch or have already seen.</li>
              <li>Engage in community discussions through separate sections for non-spoiler and spoiler discussions, as well as full reviews.</li>
              <li>Share bold opinions in a dedicated Hot Takes forum, where users can dive into passionate debates and unique perspectives on
              their favorite content.</li>
            </ul>
            <p className="text-gray-600">
              The design process involved extensive user research, wireframing, prototyping, and user testing to ensure a seamless and secure experience.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <img 
            src="./assets/images/NW_SS1.png" 
            alt="Screenshot1"
            className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
          <img 
            src="./assets/images/NW_SS2.png" 
            alt="Screenshot2"
            className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
          <img 
            src="./assets/images/NW_SS3.png" 
            alt="Screenshot3"
            className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
          <img 
            src="./assets/images/NW_SS4.png" 
            alt="Screenshot4"
            className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
          <img 
            src="./assets/images/NW_SS5.png" 
            alt="Screenshot5"
            className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
          <img 
            src="./assets/images/NW_SS6.png" 
            alt="Screenshot6"
            className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
          <img 
            src="./assets/images/NW_SS7.png" 
            alt="Screenshot7"
            className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </section>
      </main>
    </div>
  );
}