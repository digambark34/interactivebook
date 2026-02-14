import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { bookVideos, bookColors } from '../data/agaKhanBooks';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  
  const books = [
    { name: 'His Highness', subtitle: 'The 49th Imam', icon: '👑' },
    { name: 'Development Network', subtitle: 'Global Impact', icon: '🌍' },
    { name: 'Architecture & Culture', subtitle: 'Heritage & Arts', icon: '🕌' },
    { name: 'Business & Investment', subtitle: 'Economic Growth', icon: '💼' },
    { name: 'Philanthropy & Impact', subtitle: 'Humanitarian Work', icon: '❤️' },
    { name: 'Heritage & History', subtitle: 'Ismaili Legacy', icon: '📜' }
  ];

  const handleBookClick = (bookName) => {
    navigate(`/book/${encodeURIComponent(bookName)}`);
  };

  return (
    <div className="homepage">
      {/* Background Video */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={bookVideos.Home} type="video/mp4" />
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
          <h1 className="main-title">The Aga Khan Family</h1>
          <p className="subtitle">Leadership • Heritage • Vision • Impact</p>
          <motion.div 
            className="title-ornament"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            ✦
          </motion.div>
        </motion.div>

        {/* 3D Bookshelf */}
        <div className="bookshelf">
          <motion.div 
            className="shelf-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {books.map((book, index) => (
              <motion.div
                key={book.name}
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
                onClick={() => handleBookClick(book.name)}
              >
                <div className={`book book-${index + 1}`}>
                  <div className="book-spine">
                    <div className="spine-content">
                      <span className="book-icon">{book.icon}</span>
                      <h3>{book.name}</h3>
                      <span className="book-subtitle">{book.subtitle}</span>
                    </div>
                  </div>
                  <div className="book-cover" style={{ background: bookColors[book.name].gradient }}>
                    <div className="cover-design">
                      <div className="cover-ornament top">✦</div>
                      <span className="cover-icon">{book.icon}</span>
                      <h2 className="cover-title">{book.name}</h2>
                      <p className="cover-subtitle">{book.subtitle}</p>
                      <div className="cover-ornament bottom">✦</div>
                      <div className="cover-shimmer"></div>
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
                    background: bookColors[book.name].gradient 
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
          <p>✦ Touch a book to explore the Aga Khan Family legacy ✦</p>
          <motion.p 
            className="touch-hint"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            👆 Tap to Open
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
