import React from 'react';

import sheesh1 from '../assets/images/sheesh1.jpg';
import sheesh2 from '../assets/images/sheesh2.jpg';
import sheesh3 from '../assets/images/sheesh3.jpg';
import sheesh4 from '../assets/images/sheesh4.jpg';
import sheesh5 from '../assets/images/sheesh5.jpg';
import sheesh6 from '../assets/images/sheesh6.jpg';
import sheesh7 from '../assets/images/sheesh7.jpg';
import sheesh8 from '../assets/images/sheesh8.jpg';
import sheesh9 from '../assets/images/sheesh9.jpg';
import sheesh10 from '../assets/images/sheesh10.jpg';
import sheesh11 from '../assets/images/sheesh11.jpg';
import sheesh12 from '../assets/images/sheesh12.jpg';
import sheesh13 from '../assets/images/sheesh13.jpg';
import sheesh14 from '../assets/images/sheesh14.jpg';
import sheesh15 from '../assets/images/sheesh15.jpg';
import sheesh16 from '../assets/images/sheesh16.jpg';
import sheesh17 from '../assets/images/sheesh17.jpg';
import sheesh18 from '../assets/images/sheesh18.jpg';
import sheesh19 from '../assets/images/sheesh19.jpg';
import sheesh20 from '../assets/images/sheesh20.jpg';
import sheesh21 from '../assets/images/sheesh21.jpg';
import sheesh22 from '../assets/images/sheesh22.jpg';
import sheesh23 from '../assets/images/sheesh23.jpg';
import sheesh24 from '../assets/images/sheesh24.jpg';
import sheesh25 from '../assets/images/sheesh25.jpg';
import sheesh26 from '../assets/images/sheesh26.jpg';
import sheesh27 from '../assets/images/sheesh27.jpg';
import sheesh28 from '../assets/images/sheesh28.jpg';
import sheesh29 from '../assets/images/sheesh29.jpg';
import sheesh30 from '../assets/images/sheesh30.jpg';

const MemeLibrary = () => {
    const images = [sheesh1, sheesh2, sheesh3, sheesh4, sheesh5,
        sheesh6, sheesh7, sheesh8, sheesh9, sheesh10,
        sheesh11, sheesh12, sheesh13, sheesh14, sheesh15,
        sheesh16, sheesh17, sheesh18, sheesh19, sheesh20,
        sheesh21, sheesh22, sheesh23, sheesh24, sheesh25,
        sheesh26, sheesh27, sheesh28, sheesh29, sheesh30];

    return (
        <div className="container mx-auto px-4 mt-12">
            <h2 className="text-center text-5xl font-bold text-white mb-6">MEME BANK</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                        <img
                            src={image}
                            alt={`Meme ${index + 1}`}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemeLibrary;
