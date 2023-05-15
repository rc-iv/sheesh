import React from 'react';
import sheeshinfo from '../assets/images/sheeshinfo.png';
import BuyWidget from "./BuyWidget";

const SheeshInfo = () => {
  return (
    <div className="container mx-auto px-4 mt-12 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <h2 className="text-7xl font-bold mb-4">WTF IS SHEESH?</h2>
          <img src={sheeshinfo} alt="Sheesh Info" />
        </div>
        <div>
          <p className="mb-4 text-2xl">
            Sheesh Is A Slang Term Meaning “Jeez” Or “Damn,” And Is Commonly
            Used As A Positive Response To Express Awe Or Disbelief. Sheesh Is
            Now Used As A Compliment Of Hype And Was Popularized By Meme
            Culture.
          </p>
          <p className="mb-4 text-2xl">
            Sheesh Is An Experiment In Decentralized Finance That Is Attempting
            To Bridge The Gap Between Meme Culture And Community Foundation.
            There Is Nothing More Valuable Than Community.
          </p>
          <p className="mb-4 text-2xl">
            Everything Is Made By The Community, For The Community. With Ice In
            Our Veins, Sheesh Is Here To Stay. Join Us, Or Regret From The
            Sidelines In Disbelief.
          </p>
        </div>
        <div className="w-96 border-0 overflow-hidden rounded-xl">
            <BuyWidget />
        </div>
      </div>
    </div>
  );
};

export default SheeshInfo;
