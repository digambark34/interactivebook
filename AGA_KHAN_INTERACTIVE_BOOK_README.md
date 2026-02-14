# Aga Khan Family Interactive Book - LED Touchscreen Edition

## 🌟 Project Overview

An immersive, interactive digital book experience showcasing the Aga Khan family, their heritage, development work, architecture, business ventures, and philanthropic impact. This application is specifically optimized for large LED touchscreen displays with realistic 3D page-turning animations.

## ✨ Key Features

### 📚 Six Interactive Books
1. **His Highness** - Biography and leadership of His Highness the Aga Khan
2. **Development Network** - AKDN's global humanitarian work
3. **Architecture & Culture** - Aga Khan Award for Architecture and cultural initiatives
4. **Business & Investment** - Global business empire and economic development
5. **Philanthropy & Impact** - Humanitarian initiatives and social impact
6. **Heritage & History** - Ismaili Imamat legacy and historical contributions

### 🎨 Enhanced Visual Experience
- **3D Book Visualization** - Beautifully rendered 3D books on a virtual shelf
- **Realistic Page Flipping** - Smooth, natural page-turning animations with:
  - 800ms duration for realistic movement
  - Easing functions mimicking physical paper
  - Dynamic 3D rotation with proper shadows
  - Page curl effects
- **Dynamic Color Themes** - Each book has its unique gradient color scheme
- **Background Videos** - Immersive video backgrounds for each section
- **Animated UI Elements** - Smooth transitions, hover effects, and micro-interactions

### 📱 LED Touchscreen Optimization
- **Touch Gesture Support**:
  - Swipe left/right to navigate pages
  - Tap left third of screen to go back
  - Tap right two-thirds to advance
  - Touch sensitivity optimized for LED displays
- **High Contrast Mode** - Enhanced visibility on bright LED screens
- **Large Touch Targets** - All interactive elements sized for easy touch interaction (70px+ buttons)
- **Visual Touch Hints** - Animated hints showing swipe directions
- **Responsive Scaling** - Optimized for 1920px+ displays with larger fonts and buttons

### 🎭 Interactive Elements
- **Page Indicators** - Visual dots showing current page with click-to-jump functionality
- **Navigation Arrows** - Large, glowing navigation buttons
- **Back Button** - Quick return to library/home
- **Keyboard Support** - Arrow keys for navigation, Escape to return home
- **Real-time Page Counter** - Shows current page and total pages

### 🎨 Visual Effects
- **Shimmer Animations** - Book covers have animated shimmer effects
- **Floating Icons** - Subtle floating animation on book icons
- **Glow Effects** - Neon glow on hover and active states
- **Paper Texture** - Realistic paper texture overlay on pages
- **Dynamic Shadows** - 3D depth with realistic shadow effects
- **Backdrop Blur** - Modern glassmorphism effects

## 🚀 Getting Started

### Installation
```bash
cd frontend
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Deployment to Netlify
The project is pre-configured with `netlify.toml` for easy deployment.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── HomePage.jsx          # Landing page with 3D bookshelf
│   │   ├── HomePage.css          # Homepage styling
│   │   ├── BookView.jsx          # Interactive book reader
│   │   └── BookView.css          # Book reader styling
│   ├── data/
│   │   └── agaKhanBooks.js       # All book content and configuration
│   ├── App.jsx                   # Main app router
│   ├── App.css                   # Global app styles
│   ├── main.jsx                  # App entry point
│   └── index.css                 # Global CSS reset and fonts
├── pictures/                     # Image assets folder
├── index.html                    # HTML template
├── vite.config.js               # Vite configuration
└── package.json                  # Dependencies
```

## 🎨 Customization Guide

### Adding New Books

Edit `frontend/src/data/agaKhanBooks.js`:

```javascript
const agaKhanBooks = {
  "Your Book Name": [
    {
      title: "Page Title",
      text: "Page content...",
      image: "/path/to/image.jpg"
    },
    // Add more pages...
  ]
};

// Add to bookVideos
export const bookVideos = {
  "Your Book Name": "/path/to/video.mp4"
};

// Add to bookColors
export const bookColors = {
  "Your Book Name": {
    primary: "#hexcolor",
    secondary: "#hexcolor",
    gradient: "linear-gradient(...)"
  }
};
```

### Customizing Colors

Each book has three color properties:
- `primary`: Main accent color for titles, borders, glows
- `secondary`: Supporting color (currently unused, reserved for future features)
- `gradient`: CSS gradient for book covers and buttons

### Adjusting Animation Speed

In `BookView.jsx`, modify the `performPageFlip` function:
```javascript
const duration = 800; // Change this value (in milliseconds)
```

### Touch Sensitivity

In `BookView.jsx`, adjust these values in `handleTouchEnd`:
```javascript
if (Math.abs(deltaX) > 80 && deltaY < 120 && deltaTime < 600) {
  // 80 = minimum swipe distance
  // 120 = maximum vertical deviation
  // 600 = maximum swipe duration in ms
}
```

## 🖼️ Image Requirements

### Format Recommendations
- **Format**: JPG or PNG
- **Resolution**: 1920x1080 or higher for LED displays
- **Aspect Ratio**: 16:9 or 4:3
- **File Size**: Optimized (< 500KB per image recommended)

### Image Locations
Place all images in the `frontend/public/` or `frontend/pictures/` directory.

### Naming Convention
```
/agakhan-main.jpg
/akdn-work.jpg
/architecture-award.jpg
etc.
```

## 🎬 Video Backgrounds

### Video Specifications
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 minimum
- **Duration**: 30-60 seconds (will loop)
- **File Size**: Optimized for web (< 10MB recommended)

### Adding Videos
Place videos in `frontend/public/videos/` and reference in `agaKhanBooks.js`

## 🌐 Deployment

### Netlify Deployment
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `cd frontend && npm run build`
4. Publish directory: `frontend/dist`
5. Deploy!

### Environment Variables
No environment variables required for basic deployment.

## 🎯 LED Display Setup Recommendations

### Hardware Requirements
- **Display**: 1920x1080 or higher resolution LED touchscreen
- **Touch Technology**: Capacitive touch (10-point multi-touch recommended)
- **Brightness**: 500+ nits for indoor use
- **Computer**: Modern PC/Mac with GPU acceleration support

### Browser Setup
- **Recommended**: Chrome/Edge (Hardware acceleration enabled)
- **Full Screen**: Press F11 for immersive experience
- **Zoom**: 100% (Ctrl+0 to reset)
- **Settings**: Enable hardware acceleration in browser settings

### Calibration
1. Open browser in fullscreen (F11)
2. Test touch accuracy in all corners
3. Adjust touch sensitivity if needed
4. Verify all buttons are easily touchable
5. Test swipe gestures in both directions

## 📊 Performance Optimization

### Tips for Smooth Performance
1. **Use hardware acceleration** in browser settings
2. **Close unnecessary tabs** and applications
3. **Update graphics drivers** to latest version
4. **Enable GPU rendering** in browser flags
5. **Use local deployment** (not remote server) for LED displays
6. **Optimize images** before adding to project

### Browser Settings (Chrome/Edge)
```
chrome://flags
- Enable: GPU rasterization
- Enable: Hardware accelerated video decode
- Enable: Touch events API
```

## 🐛 Troubleshooting

### Issue: Page flip animation is laggy
**Solution**: 
- Enable hardware acceleration
- Reduce animation duration
- Optimize/compress images

### Issue: Touch not working properly
**Solution**:
- Calibrate touchscreen in OS settings
- Adjust touch sensitivity values in code
- Verify browser touch event support

### Issue: Images not loading
**Solution**:
- Check image paths (case-sensitive)
- Verify images are in `public` folder
- Clear browser cache

### Issue: Books not appearing on homepage
**Solution**:
- Check `agaKhanBooks.js` syntax
- Verify import statement in `HomePage.jsx`
- Check browser console for errors

## 📝 Content Guidelines

### Writing Page Content
- **Title**: 3-8 words, clear and descriptive
- **Text**: 100-250 words per page
- **Tone**: Informative, respectful, engaging
- **Language**: Clear, accessible English
- **Citations**: Include sources for historical facts

### Book Structure
- **First Page**: Introduction and overview
- **Middle Pages**: Detailed content
- **Last Page**: Summary or call-to-action
- **Recommended**: 5-7 pages per book

## 🎨 Design Philosophy

This project emphasizes:
- **Realism**: Page turning mimics physical books
- **Elegance**: Clean, sophisticated visual design
- **Accessibility**: Large touch targets, high contrast
- **Performance**: Smooth 60fps animations
- **Immersion**: Full-screen experience with ambient backgrounds
- **Cultural Respect**: Dignified presentation of Aga Khan legacy

## 🤝 Contributing

To contribute to this project:
1. Add more books/content to `agaKhanBooks.js`
2. Improve animations and transitions
3. Add new interactive features
4. Optimize performance
5. Enhance accessibility
6. Create additional themes

## 📄 Content Attribution

The content in this interactive book is based on publicly available information about His Highness the Aga Khan and the Aga Khan Development Network. For official information, please visit:
- https://www.akdn.org
- https://the.ismaili

## 🔧 Technical Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Animation**: Framer Motion
- **Routing**: React Router v6
- **Styling**: CSS3 with CSS Variables
- **Deployment**: Netlify

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android 10+)

## 🏆 Features Highlights

### Realistic Page Flip Animation
- Cubic-bezier easing for natural motion
- RequestAnimationFrame for smooth 60fps
- Dynamic shadow casting during flip
- Proper 3D perspective transformation

### Touch Optimization
- Swipe gesture detection with velocity calculation
- Tap zones for quick navigation
- Prevents accidental triggers
- Visual feedback on touch

### LED Display Enhancements
- High DPI rendering
- Increased font sizes for readability
- Maximum contrast colors
- Touch target sizes >44px (Apple guidelines)
- Battery-efficient animations

## 🎓 Learning Resources

This project demonstrates:
- Advanced React hooks (useState, useEffect, useRef)
- CSS 3D transformations
- Touch event handling
- Animation performance optimization
- Component composition
- Responsive design patterns
- Modern CSS techniques (Grid, Flexbox, Custom Properties)

## 📞 Support

For questions or issues:
1. Check the troubleshooting section
2. Review browser console for errors
3. Verify all dependencies are installed
4. Ensure images and videos are properly placed

## 🎉 Enjoy!

Experience the rich history and profound impact of the Aga Khan family through this immersive interactive book. Perfect for museums, exhibitions, educational institutions, or personal exploration.

---

**Built with ❤️ for preserving and sharing the legacy of the Aga Khan family**
