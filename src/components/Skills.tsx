import React from 'react';
import { Code, AppWindow, Palette } from 'lucide-react';

export function Skills() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Code className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Programming Languages</h3>
            <ul className="text-gray-600 space-y-2 list-disc list-inside">
              <li>Python</li>
              <li>C, C#</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <AppWindow className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Developer Tools</h3>
            <ul className="text-gray-600 space-y-2 list-disc list-inside">
              <li>VS Code</li>
              <li>Visual Studio</li>
              <li>Pycharm</li>
              <li>Unreal Engine</li>
              <li>Unity</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Palette className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Graphic Design Tools</h3>
            <ul className="text-gray-600 space-y-2 list-disc list-inside">
              <li>Procreate</li>
              <li>Figma</li>
              <li>Photoshop</li>
              <li>Adobe Fresco</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}