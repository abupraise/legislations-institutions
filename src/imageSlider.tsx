import { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import EUflag from './img/christian-lue-8Yw6tsB8tnc-unsplash.jpg';
import EUemblem from './img/guillaume-perigois-wVqC9dty3VQ-unsplash.jpg';
import EUimage from './img/ibrahim-boran-JhbrPBIZj0o-unsplash.jpg';

function ImageSlider() {
  const images = [EUflag, EUemblem, EUimage];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      setTimeout(() => setShouldRender(false), 300);
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isVisible]);

  return (
    <>
      <button
        className="fixed bottom-4 right-4 z-50 p-3 bg-eu-yellow text-eu-blue rounded-full shadow-lg hover:bg-yellow-500 transition"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? <EyeOff size={24} /> : <Eye size={24} />}
      </button>

      {shouldRender && (
        <aside
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md transition-opacity duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
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
      )}
    </>
  );
}

export default ImageSlider;