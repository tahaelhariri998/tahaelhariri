import { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const images = [
    './image1.jpg',
    './image2.jpg',
    './image3.jpg',
    './image4.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // كل 3 ثواني يتم تغيير الصورة

    return () => clearInterval(interval); // عند الخروج من المكون يتم تنظيف المؤقت
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img src={images[currentIndex]} alt="carousel" className="w-full h-full object-cover" />
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageCarousel;
