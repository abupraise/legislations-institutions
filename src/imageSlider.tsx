import { useState, useEffect } from 'react';
import EUflag from './img/christian-lue-8Yw6tsB8tnc-unsplash.jpg';
import EUemblem from './img/guillaume-perigois-wVqC9dty3VQ-unsplash.jpg';
import EUimage from './img/ibrahim-boran-JhbrPBIZj0o-unsplash.jpg';

function ImageSlider() {
  const images = [EUflag, EUemblem, EUimage];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <aside className="hidden md:hidden lg:block fixed top-0 right-0 h-full w-64 bg-white shadow-md">
      <div className="p-4 mt-[39rem]">
        <img
          src={images[currentIndex]}
          alt="European Union"
          className={`w-full h-32 object-cover shadow-lg transition-opacity duration-1000 ease-in ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </aside>
  );
}

export default ImageSlider;
