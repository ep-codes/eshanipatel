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
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 animate-slideUp animation-delay-200">
            A smart home security system app that empowers users to monitor and control their home security devices remotely.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">About the Project</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-6">
              Night Watch is a comprehensive UI/UX design project focused on creating an intuitive and secure smart home security system interface. The app enables users to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Monitor multiple security cameras in real-time</li>
              <li>Receive instant notifications for any suspicious activity</li>
              <li>Control smart locks and security systems remotely</li>
              <li>View detailed activity logs and analytics</li>
              <li>Share access with family members or trusted contacts</li>
            </ul>
            <p className="text-gray-600">
              The design process involved extensive user research, wireframing, prototyping, and user testing to ensure a seamless and secure experience.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img 
            src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200" 
            alt="Dashboard Interface"
            className="w-full aspect-video object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
          <img 
            src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&q=80&w=1200" 
            alt="Mobile App Screens"
            className="w-full aspect-video object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
          <img 
            src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&q=80&w=1200" 
            alt="Security Features"
            className="w-full aspect-video object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
          <img 
            src="https://images.unsplash.com/photo-1563461660947-507ef49e9c47?auto=format&fit=crop&q=80&w=1200" 
            alt="Notification System"
            className="w-full aspect-video object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </section>
      </main>
    </div>
  );
}