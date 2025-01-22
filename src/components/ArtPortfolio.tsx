import React from 'react';
import { Navigation } from './Navigation';

const artworks = [
  {
    title: "Digital Illustration",
    description: "Character design exploration",
    image: "https://images.unsplash.com/photo-1615859131861-052f0641a60e?auto=format&fit=crop&q=80&w=800",
    category: "Digital Art"
  },
  {
    title: "Concept Art",
    description: "Environment concept for game design",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800",
    category: "Concept Art"
  },
  {
    title: "Character Design",
    description: "Original character illustration",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=800",
    category: "Digital Art"
  },
  {
    title: "Landscape Study",
    description: "Digital painting practice",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=800",
    category: "Digital Art"
  },
  {
    title: "UI Design",
    description: "Game interface concept",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    category: "UI Design"
  },
  {
    title: "Animation Frame",
    description: "Key frame from character animation",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=800",
    category: "Animation"
  }
];

interface ArtPortfolioProps {
  setShowArtPortfolio: (show: boolean) => void;
}

export function ArtPortfolio({ setShowArtPortfolio }: ArtPortfolioProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const categories = Array.from(new Set(artworks.map(art => art.category)));
  const filteredArtworks = selectedCategory
    ? artworks.filter(art => art.category === selectedCategory)
    : artworks;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navigation setShowArtPortfolio={setShowArtPortfolio} />
      
      <main className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fadeIn">
            Art Portfolio
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 animate-slideUp animation-delay-200">
            A collection of digital artwork, illustrations, and design concepts showcasing my creative journey.
          </p>
          
          <div className="flex justify-center gap-4 mb-8 animate-slideUp animation-delay-400">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === null
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-purple-100'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-purple-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-w-4 aspect-h-3">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="px-6 py-2 bg-white text-gray-800 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                <p className="text-gray-600 mb-2">{artwork.description}</p>
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  {artwork.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}