import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { cityVideos, cityColors } from '../data/cityBooks';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  
  const cities = [
    { name: 'Kolkata', subtitle: 'City of Joy' },
    { name: 'Varanasi', subtitle: 'Spiritual Heart' },
    { name: 'Jaipur', subtitle: 'Pink City' },
    { name: 'Mumbai', subtitle: 'City of Dreams' }
  ];

  const handleBookClick = (cityName) => {
    navigate(`/book/${cityName}`);
  };

  return (
    <div className="homepage">
      {/* Background Video */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={cityVideos.Home} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Content */}
      <div className="homepage-content">
        <motion.div 
          className="title-section"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="main-title">Journey Through India</h1>
          <p className="subtitle">Discover the soul of incredible cities</p>
        </motion.div>

        {/* 3D Bookshelf */}
        <div className="bookshelf">
          <motion.div 
            className="shelf-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {cities.map((city, index) => (
              <motion.div
                key={city.name}
                className="book-wrapper"
                initial={{ opacity: 0, y: 100, rotateY: -20 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.7 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -20, 
                  rotateY: 5,
                  rotateX: -5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleBookClick(city.name)}
              >
                <div className={`book book-${city.name.toLowerCase()}`}>
                  <div className="book-spine">
                    <div className="spine-content">
                      <h3>{city.name}</h3>
                      <span className="book-subtitle">{city.subtitle}</span>
                    </div>
                  </div>
                  <div className="book-cover">
                    <div className="cover-design">
                      <div className="cover-ornament top"></div>
                      <h2 className="cover-title">{city.name}</h2>
                      <p className="cover-subtitle">{city.subtitle}</p>
                      <div className="cover-ornament bottom"></div>
                    </div>
                  </div>
                  <div className="book-pages"></div>
                </div>
                
                {/* Glow effect */}
                <motion.div 
                  className="book-glow"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{ 
                    background: cityColors[city.name].gradient 
                  }}
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Shelf */}
          <motion.div 
            className="shelf"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          ></motion.div>
        </div>

        {/* Instructions */}
        <motion.div 
          className="instructions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <p>✨ Touch a book to begin your journey ✨</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
