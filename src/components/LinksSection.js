import React from 'react';

const LinksSection = () => {
  return (
    <div className="container mx-auto px-4 mt-6 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <a
          href="https://app.uniswap.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-300 rounded-lg p-4 text-center hover:border-green-400 hover:bg-green-400 text-white transition-colors duration-200"
        >
          <h2 className="text-xl font-bold mb-2">Uniswap</h2>
          <p>Trade Sheesh on Uniswap</p>
        </a>
        <a
          href="https://www.dextools.io/app/en/ether/pair-explorer/0xa9e90002619cd9ed19633c0b093dba5f0fe0a1a1"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 hover:bg-blue-500 text-white transition-colors duration-200"
        >
          <h2 className="text-xl font-bold mb-2">Dextools</h2>
          <p>Track Sheesh on Dextools</p>
        </a>
        <a
          href="https://t.me/sheeshportal"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-300 rounded-lg p-4 text-center hover:border-indigo-500 hover:bg-indigo-500 text-white transition-colors duration-200"
        >
          <h2 className="text-xl font-bold mb-2">Telegram</h2>
          <p>Join Sheesh on Telegram</p>
        </a>
        <a
          href="https://etherscan.io/token/0x014550a34149231b8432b8dd210fadd81b1d2668"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-300 rounded-lg p-4 text-center hover:border-purple-600 hover:bg-purple-600 text-white transition-colors duration-200"
        >
          <h2 className="text-xl font-bold mb-2">Etherscan</h2>
          <p>Check Sheesh on Etherscan</p>
        </a>
      </div>
    </div>
  );
};

export default LinksSection;
