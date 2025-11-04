import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import cityBooks, { cityVideos, cityColors } from '../data/cityBooks';
import './BookView.css';

const BookView = () => {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('');
  const touchStartRef = useRef({ x: 0, y: 0 });
  
  const bookData = cityBooks[cityName] || [];
  const totalPages = bookData.length;
  const videoSrc = cityVideos[cityName];
  const colors = cityColors[cityName];

  // Page flip sound effect
  const playFlipSound = () => {
    const audio = new Audio();
    audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYHGmS96+enTgwOUKfj8LdjHAU2j9XyyHgsBS13yO/ekz8KElyx6OyrWBMKQ5zd8sFuJAUpfsrx25E9CBhiuuvosVkTCkOa3PLCcCcFKH3J8d2SOwoUXbXq7KlYEwpDl9z0wW8oBSh+yfHakTsIGWC56+mnVhELQ5fZ88FwJwYoe8jv35A9CBRasebnrVcTC0KX2fPBcSgFJ3zI8N6SPAgYYLjq6KdWEQs/ltrzwXApBSZ8x+/dlDoJFlyw6eimVRELP5TY9MJxKgUlecfv3JM8CBVasOjnp1cTC02Z3PPCciwGKHrH79uQOQYVVq/o56lVEwtNl9n0wW8rBid6yO/ekDsIFVux6OasTxEKQ5fZ88FwKQUoesfw3Y47CBZYr+jnqVQTC0KV2fPBcSoFJ3nH79yROggWWK/o56hVFAtCltvzwXEqBSd5x+/ckDoIFViu6OepVRMLQpXa88FwKgUnecfv3JA7CBdXr+nnqVQTC0GU2vPBcSoFJ3jG79uROggXV67o5qlUEwtBk9rzwXEqBSd5xu/clDoIFlet6OapVRMLQZTa88FxKQUmecfv3JA6CBdXrejnqFQTC0GT2/PBcSkFJnjG79uQOggWVq3o56hVEwtBk9rzwXEpBSZ4xu/bkDoIF1au6OeoVRMLQJPa88FxKQUmeMbv25A6CBZXrejnqFUTC0CT2vPBcSkFJnjG79uQOggWV63o56hUFAtAk9rzwXEpBSV4xu/bkDsHFVat6OaoVBQKQZLZ88FxKgUleMXv3I87CBVWrejnp1UUC0CS2fPBcSoFJXjF79uQOwgVVq3o56dVFAtAktnzwXEpBSV4xe/bkDsIFVat6OenVRQLQJLZ88FxKQUleMXv25A7CBVWrejnp1UUC0CS2fPBcSoFJXjF79uQOwgVVq3o6KdVFAtAkdjywXAqBSR3xO/ckTsJFlet6OenVRQLPpHY88JxKgYkd8Tv25E7CBZXrejop1QUCz6R2/PCcSsGI3fD79yROwgWV63o6KdUFAs+kNvzwnErBiN3w+/ckTsIFlat6OinVBQLPpHa88FwKwUjdsLu3JE7CBZXrejop1QUCz6P2vPBcCsGI3bC7tyRPAgWV63o6KZVFAo9kNrzwXArBiJ2wu7ckjwJFVat6OimVBQLPpDa88FwKgUidsDv3JI7CBVWrejnp1UUCz6P2vPBcCsGI3bB7tuRPAgWV63o56dUFAs+jtnzwW8rBSJ1wO7ckTwIFlat6OenVRQLPpDa88FwKgUidcHu25E8CBZWrejmqFQVCz6P2PPBbysGIXXB7tyQPQgWVqzo56dUFQs+jtnzwG8rBiJ1we7ckD0IF1Wu6OenVRQLPpHa88BwKgYhdL/u3JA9CBdVrejmqFQVCz6Q2PPBbysFIXXA7tyQPQgXVa3o5qdUFQs+kNnzwW8rBiF0v+7ckD0IF1Wt6OanVBULPo/Z88BvKgYhdL/u3JA9CBdVrejmp1UUCz6P2fPAbysFIXS/7tyQPQgXVa3o5qdVFAs+jtnzwG8qBSF0vu7ckD0IF1Ws6OanVBULPo/Z88BvKgUhc77u3I8+CBdVrOfnp1UUCz2O2fPAbywGIHO+7tuPPggWVqvn56dVFAs+jNnzv28rBSBzve7cjz8IF1Ws5+enVRQLPY3Z87xvLAYgc73u3I8+CBdVrOfnp1UUCz2N2fO8bysFIHO97tyPPggXVazn56ZVFAs9jNjzvm8sBR9yvO7djz4IF1Wr5+emVhQLPYvY877vKwUfc7zu3I8+CBdWq+fnplUUCz2M2PO+7ysGH3O77tyPPggXVqvn56ZWFAs9i9jzvu8rBR9zu+7djz4IF1ar5+emVhQKPYvZ877vKwYfcrvv3I8+CBdVq+fmplYUCz2L2fO+7ysFH3K77tyPPggXVqrm56ZWFAs9i9jzvu8rBh9yu+/bjz4IF1Wr5uemVhQKPYvY877vKwYfcrvv3I8+CBdVq+bnplYUCz2L2PO+7ysFH3K779uPPggXVarn56ZWFAo9i9jzvu8rBh9yu+/cjz4IF1Wq5+emVhQLPIvY877vKwYfcrvv3I8+CBdVqubnp1YUCT2L2PO+7ysFH3K779uPPggXVarn56dWFAk9i9jzvu8rBh9yu+/cjz4IF1Wq5+enVhQJPIvY877vKwYfcrvv3I8+CBdVqubnp1YUCT2L2PO+7ysFH3K77t';
    audio.volume = 0.3;
    audio.play().catch(() => {});
  };

  // Navigate to next page
  const nextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('next');
      playFlipSound();
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  // Navigate to previous page
  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      playFlipSound();
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  // Touch and keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isFlipping]);

  const handleBackToHome = () => {
    navigate('/');
  };

  // Improved touch handling for swipe gestures
  const handleTouchStart = (e) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now()
    };
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0];
    const deltaX = touchEnd.clientX - touchStartRef.current.x;
    const deltaY = Math.abs(touchEnd.clientY - touchStartRef.current.y);
    const deltaTime = Date.now() - touchStartRef.current.time;
    
    // Only trigger if horizontal swipe is dominant and quick enough
    if (Math.abs(deltaX) > 50 && deltaY < 100 && deltaTime < 500) {
      if (deltaX > 0) {
        prevPage(); // Swipe right = previous page
      } else {
        nextPage(); // Swipe left = next page
      }
    }
  };

  const currentPageData = bookData[currentPage];


  if (!bookData.length) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-view">
      {/* Background Video */}
      <div className="book-video-background">
        <video autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="book-video-overlay"></div>
      </div>

      {/* Book Container */}
      <div 
        className="book-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div 
          className="open-book"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {/* Left Page */}
          <div className="page left-page">
            <div className="page-content">
              {currentPage > 0 ? (
                <>
                  <div className="page-image-container">
                    <img 
                      src={bookData[currentPage - 1].image} 
                      alt={bookData[currentPage - 1].title}
                      className="page-image"
                    />
                  </div>
                  <h2 className="page-title" style={{ color: colors.primary }}>
                    {bookData[currentPage - 1].title}
                  </h2>
                  <p className="page-text">{bookData[currentPage - 1].text}</p>
                </>
              ) : (
                <div className="cover-page" style={{ background: colors.gradient }}>
                  <div className="cover-content">
                    <h1 className="book-main-title">{cityName}</h1>
                    <div className="cover-divider"></div>
                    <p className="cover-tagline">A Journey Through Culture & Heritage</p>
                  </div>
                </div>
              )}
            </div>
            <div className="page-number">{currentPage > 0 ? currentPage : ''}</div>
          </div>

          {/* Book Spine */}
          <div className="book-spine-shadow"></div>

          {/* Right Page with Flip Animation */}
          <div className={`page right-page ${isFlipping ? 'flipping' : ''} ${flipDirection}`}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentPage}
                className="page-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="page-image-container">
                  <img 
                    src={currentPageData.image} 
                    alt={currentPageData.title}
                    className="page-image"
                  />
                </div>
                <h2 className="page-title" style={{ color: colors.primary }}>
                  {currentPageData.title}
                </h2>
                <p className="page-text">{currentPageData.text}</p>
              </motion.div>
            </AnimatePresence>
            <div className="page-number">{currentPage + 1}</div>
            
            {/* Page Curl Effect */}
            <div className="page-curl"></div>
          </div>

          {/* Navigation Arrows */}
          <button 
            className="nav-arrow left-arrow"
            onClick={prevPage}
            disabled={currentPage === 0}
            style={{ opacity: currentPage === 0 ? 0.3 : 1 }}
          >
            ‹
          </button>
          <button 
            className="nav-arrow right-arrow"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            style={{ opacity: currentPage === totalPages - 1 ? 0.3 : 1 }}
          >
            ›
          </button>
        </motion.div>

        {/* Page Indicator */}
        <div className="page-indicator">
          {bookData.map((_, index) => (
            <div 
              key={index}
              className={`indicator-dot ${index === currentPage ? 'active' : ''}`}
              style={{ 
                backgroundColor: index === currentPage ? colors.primary : '#ccc' 
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <motion.button 
        className="back-button"
        onClick={handleBackToHome}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ background: colors.gradient }}
      >
        <span className="back-icon">←</span>
        <span>Back to Home</span>
      </motion.button>
    </div>
  );
};

export default BookView;
