import React, { useEffect } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

const artworks = [
  {
    title: "Blue/Purple Galaxy",
    description: "",
    image: "./assets/images/BlueGalaxy.PNG",
    category: "Digital Art"
  },
  {
    title: "Blue Inverted Galaxy",
    description: "",
    image: "./assets/images/InvertedBlueGalaxy.PNG",
    category: "Digital Art"
  },
  {
    title: "Blue Sky Cherry Blossoms",
    description: "",
    image: "./assets/images/BlueSkyCherryBlossom.JPG",
    category: "Painting"
  },
  {
    title: "Clip & Scrunchie",
    description: "",
    image: "./assets/images/ClipScrunchie.PNG",
    category: "Digital Art"
  },
  {
    title: "Stationary",
    description: "",
    image: "./assets/images/Stationary.JPG",
    category: "Digital Art"
  },
  {
    title: "Rose",
    description: "",
    image: "./assets/images/Rose.PNG",
    category: "Digital Art"
  },
  {
    title: "Yeji - ITZY",
    description: "",
    image: "/assets/images/YejiItzy.PNG",
    category: "Digital Art"
  },
  {
    title: "Lia - ITZY",
    description: "",
    image: "/assets/images/LiaItzy.PNG",
    category: "Digital Art"
  },
  {
    title: "Ryujin - ITZY",
    description: "",
    image: "/assets/images/RyujinItzy.PNG",
    category: "Digital Art"
  },
  {
    title: "Chaeryeong - ITZY",
    description: "",
    image: "/assets/images/ChaeryeongItzy.PNG",
    category: "Digital Art"
  },
  {
    title: "Yuna - ITZY",
    description: "",
    image: "/assets/images/YunaItzy.PNG",
    category: "Digital Art"
  },
];

interface ArtPortfolioProps {
  setShowArtPortfolio: (show: boolean) => void;
}

export function ArtPortfolio({ setShowArtPortfolio }: ArtPortfolioProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = Array.from(new Set(artworks.map(art => art.category)));
  const filteredArtworks = selectedCategory
    ? artworks.filter(art => art.category === selectedCategory)
    : artworks;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navigation setShowArtPortfolio={setShowArtPortfolio} />
      
      <main className="container mx-auto px-4 pt-32">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
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
      <Footer />
    </div>
  );
}