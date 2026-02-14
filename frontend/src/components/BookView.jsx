import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import agaKhanBooks, { bookVideos, bookColors } from '../data/agaKhanBooks';
import './BookView.css';

const BookView = () => {
  const { bookName } = useParams();
  const navigate = useNavigate();
  const decodedBookName = decodeURIComponent(bookName);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('');
  const [pageFlipAngle, setPageFlipAngle] = useState(0);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  
  const bookData = agaKhanBooks[decodedBookName] || [];
  const totalPages = bookData.length;
  const videoSrc = bookVideos[decodedBookName];
  const colors = bookColors[decodedBookName];

  // Enhanced page flip sound effect with realistic paper sound
  const playFlipSound = () => {
    const audio = new Audio();
    audio.src = 'data:audio/wav;base64,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';
    audio.volume = 0.3;
    audio.play().catch(() => {});
  };

  // Realistic page flip with 3D transformation
  const performPageFlip = (direction, targetPage) => {
    setIsFlipping(true);
    setFlipDirection(direction);
    playFlipSound();
    
    let startTime = null;
    const duration = 800; // 800ms for realistic flip
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for realistic page flip
      const easeInOutQuart = progress < 0.5
        ? 8 * progress * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 4) / 2;
      
      const angle = direction === 'next' ? easeInOutQuart * -180 : easeInOutQuart * 180;
      setPageFlipAngle(angle);
      
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentPage(targetPage);
        setPageFlipAngle(0);
        setIsFlipping(false);
        setFlipDirection('');
      }
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  // Navigate to next page
  const nextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      performPageFlip('next', currentPage + 1);
    }
  };

  // Navigate to previous page
  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      performPageFlip('prev', currentPage - 1);
    }
  };

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Touch and keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
      if (e.key === 'Escape') navigate('/');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, isFlipping]);

  const handleBackToHome = () => {
    navigate('/');
  };

  // Enhanced touch handling for LED touchscreen displays
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
    
    // Swipe detection with sensitivity adjusted for LED touchscreens
    if (Math.abs(deltaX) > 80 && deltaY < 120 && deltaTime < 600) {
      if (deltaX > 0) {
        prevPage(); // Swipe right = previous page
      } else {
        nextPage(); // Swipe left = next page
      }
    }
    // Tap detection for touchscreen
    else if (Math.abs(deltaX) < 30 && deltaY < 30 && deltaTime < 400) {
      const windowWidth = window.innerWidth;
      const tapX = touchEnd.clientX;
      
      // Tap on left third = previous, right two-thirds = next
      if (tapX < windowWidth / 3) {
        prevPage();
      } else {
        nextPage();
      }
    }
  };

  // Handle page area clicks/taps
  const handleLeftPageClick = (e) => {
    if (e.target.closest('.nav-arrow') || e.target.closest('.back-button')) return;
    prevPage();
  };

  const handleRightPageClick = (e) => {
    if (e.target.closest('.nav-arrow') || e.target.closest('.back-button')) return;
    nextPage();
  };

  const currentPageData = bookData[currentPage];
  
  // Default colors if book colors not found
  const safeColors = colors || {
    primary: '#1e3a8a',
    secondary: '#fbbf24',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #fbbf24 100%)'
  };

  if (!bookData || !bookData.length) {
    return (
      <div className="book-view" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#1a1a1a' }}>
        <div className="error-message" style={{ textAlign: 'center', color: 'white' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Book not found: {decodedBookName}</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#FFD700' }}>Available books: {Object.keys(agaKhanBooks).join(', ')}</p>
          <button onClick={handleBackToHome} style={{ background: '#1e3a8a', color: 'white', padding: '15px 30px', borderRadius: '10px', fontSize: '18px', cursor: 'pointer', border: 'none' }}>Return Home</button>
        </div>
      </div>
    );
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
          initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
        >
          {/* Left Page */}
          <div 
            className={`page left-page ${isFlipping && flipDirection === 'prev' ? 'flipping' : ''} ${flipDirection}`}
            onClick={handleLeftPageClick}
            style={{ 
              cursor: currentPage > 0 ? 'pointer' : 'default',
              touchAction: 'manipulation',
              transform: flipDirection === 'prev' ? `rotateY(${pageFlipAngle}deg)` : 'rotateY(0deg)',
              transformOrigin: 'right center'
            }}
          >
            <div className="page-content">
              {currentPage > 0 ? (
                <>
                  <motion.div 
                    className="page-image-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={bookData[currentPage - 1].image} 
                      alt={bookData[currentPage - 1].title}
                      className="page-image"
                    />
                    <div className="image-frame" style={{ borderColor: safeColors.primary }}></div>
                  </motion.div>
                  <motion.h2 
                    className="page-title" 
                    style={{ color: safeColors.primary }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {bookData[currentPage - 1].title}
                  </motion.h2>
                  <motion.p 
                    className="page-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {bookData[currentPage - 1].text}
                  </motion.p>
                </>
              ) : (
                <div className="cover-page" style={{ background: safeColors.gradient }}>
                  <motion.div 
                    className="cover-content"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1 className="book-main-title">{decodedBookName}</h1>
                    <div className="cover-divider"></div>
                    <p className="cover-tagline">The Aga Khan Family Interactive Book</p>
                    <div className="cover-ornament-bottom">✦</div>
                  </motion.div>
                </div>
              )}
            </div>
            <div className="page-number" style={{ color: colors.primary }}>
              {currentPage > 0 ? currentPage : ''}
            </div>
            {currentPage > 0 && (
              <>
                <div className="page-curl page-curl-left" style={{ 
                  background: `linear-gradient(to right, transparent, ${safeColors.primary}15, transparent)` 
                }}></div>
                <div className="page-texture"></div>
              </>
            )}
          </div>

          {/* Book Spine Shadow */}
          <div className="book-spine-shadow"></div>

          {/* Right Page with Enhanced 3D Flip Animation */}
          <div 
            className={`page right-page ${isFlipping && flipDirection === 'next' ? 'flipping' : ''} ${flipDirection}`}
            onClick={handleRightPageClick}
            style={{ 
              cursor: currentPage < totalPages - 1 ? 'pointer' : 'default',
              touchAction: 'manipulation',
              transform: flipDirection === 'next' ? `rotateY(${pageFlipAngle}deg)` : 'rotateY(0deg)',
              transformOrigin: 'left center'
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentPage}
                className="page-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="page-image-container"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={currentPageData.image} 
                    alt={currentPageData.title}
                    className="page-image"
                  />
                  <div className="image-frame" style={{ borderColor: safeColors.primary }}></div>
                </motion.div>
                <motion.h2 
                  className="page-title" 
                  style={{ color: safeColors.primary }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {currentPageData.title}
                </motion.h2>
                <motion.p 
                  className="page-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {currentPageData.text}
                </motion.p>
              </motion.div>
            </AnimatePresence>
            <div className="page-number" style={{ color: safeColors.primary }}>
              {currentPage + 1}
            </div>
            
            {/* Realistic Page Curl Effect */}
            <div className="page-curl" style={{ 
              background: `linear-gradient(to left, transparent, ${safeColors.primary}15, transparent)` 
            }}></div>
            <div className="page-texture"></div>
          </div>

          {/* Navigation Arrows - Optimized for LED Touchscreen */}
          <motion.button 
            className="nav-arrow left-arrow"
            onClick={prevPage}
            disabled={currentPage === 0 || isFlipping}
            style={{ 
              opacity: currentPage === 0 ? 0.3 : 1,
              background: colors?.gradient || '#1e3a8a'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ‹
          </motion.button>
          <motion.button 
            className="nav-arrow right-arrow"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1 || isFlipping}
            style={{ 
              opacity: currentPage === totalPages - 1 ? 0.3 : 1,
              background: colors?.gradient || '#1e3a8a'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ›
          </motion.button>
        </motion.div>

        {/* Enhanced Page Indicator for LED Display */}
        <motion.div 
          className="page-indicator"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="indicator-label" style={{ color: colors?.primary || '#fff' }}>
            Page {currentPage + 1} of {totalPages}
          </div>
          <div className="indicator-dots">
            {bookData.map((_, index) => (
              <motion.div 
                key={index}
                className={`indicator-dot ${index === currentPage ? 'active' : ''}`}
                style={{ 
                  backgroundColor: index === currentPage ? colors?.primary : '#999',
                  transform: index === currentPage ? 'scale(1.3)' : 'scale(1)',
                  cursor: 'pointer'
                }}
                whileHover={{ scale: 1.5 }}
                onClick={() => !isFlipping && index !== currentPage && (
                  index > currentPage ? performPageFlip('next', index) : performPageFlip('prev', index)
                )}
              ></motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Back Button - Enhanced for Touchscreen */}
      <motion.button 
        className="back-button"
        onClick={handleBackToHome}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring" }}
        whileHover={{ scale: 1.1, x: 10 }}
        whileTap={{ scale: 0.9 }}
        style={{ background: colors?.gradient || '#1e3a8a' }}
      >
        <span className="back-icon">←</span>
        <span className="back-text">Back to Library</span>
      </motion.button>

    </div>
  );
};

export default BookView;
