import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navigation } from '../components/Navigation';

export function ArtPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pt-16">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-4 text-center">Art Portfolio</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A showcase of illustration, graphic design, moodboards, and contact sheets made in CMIS4080 - Cross-Media Design class.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* This grid will be populated with your uploaded images */}
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              Your artwork will appear here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}