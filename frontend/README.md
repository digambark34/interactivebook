# Interactive City Books

An immersive, interactive book experience showcasing the cultural heritage of four iconic Indian cities: Kolkata, Varanasi, Jaipur, and Mumbai. Built with React and designed for touch screen displays and events.

## Features

✨ **3D Bookshelf Home Page** - Interactive books with realistic hover and selection effects
📖 **Realistic Page Flipping** - Smooth page turn animations with authentic book feel  
🎥 **Video Backgrounds** - City-specific video backgrounds for each book
🔊 **Sound Effects** - Page flip sound effects for enhanced realism
⏱️ **Auto-Flip Demo** - Automatically flips pages after 30 seconds of inactivity
📱 **Touch Optimized** - Full support for touch screen TVs and tablets
⌨️ **Keyboard Navigation** - Arrow keys for page navigation
🎨 **Beautiful Design** - Rich animations, gradients, and professional typography
♿ **Accessible** - Keyboard navigation and semantic HTML

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Smooth animations
- **React Router** - Navigation between pages
- **CSS3** - Advanced styling and animations

## Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── HomePage.jsx          # 3D bookshelf homepage
│   │   ├── HomePage.css
│   │   ├── BookView.jsx          # Interactive book reader
│   │   └── BookView.css
│   ├── data/
│   │   └── cityBooks.js          # Book content for all cities
│   ├── App.jsx                   # Main app with routing
│   ├── App.css
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── pictures/                     # Assets folder
│   ├── homepagevideo.mp4        # Homepage background
│   ├── kolkatavideo.mp4         # Kolkata book background
│   ├── varanasivideo.mp4        # Varanasi book background
│   ├── jaipurvideo.mp4          # Jaipur book background
│   ├── mumbaivideo.mp4          # Mumbai book background
│   ├── kolkata1.jpg - kolkata4.jpg
│   ├── varanasi1.jpg - varanasi5.jpg
│   ├── jaipur1.jpg - jaipur5.jpg
│   └── mumbai1.jpg - mumbai5.jpg
├── package.json
├── vite.config.js
└── index.html
```

## Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Navigate to frontend directory**
   ```bash
   cd d:\interactivebook\frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   The app will open at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## Deployment to Netlify

### Method 1: Netlify CLI

1. Install Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

### Method 2: Netlify Dashboard

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Set build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`
6. Click "Deploy site"

The `netlify.toml` file is already configured with these settings.

## Usage

### Navigation

**Homepage**
- Click/Touch any book to open it
- Books have hover effects and 3D tilting

**Book View**
- **Next Page**: Click right arrow, press Right Arrow key, or swipe left
- **Previous Page**: Click left arrow, press Left Arrow key, or swipe right
- **Back to Home**: Click "Back to Home" button at the bottom
- **Auto-flip**: Pages automatically flip after 30 seconds of no interaction

### Customization

#### Adding/Editing Book Content

Edit `src/data/cityBooks.js`:

```javascript
const cityBooks = {
  CityName: [
    {
      title: "Page Title",
      text: "Page content...",
      image: "/pictures/city1.jpg"
    },
    // Add more pages...
  ]
};
```

#### Changing Colors

Modify the `cityColors` object in `src/data/cityBooks.js`:

```javascript
export const cityColors = {
  CityName: {
    primary: "#FFD700",
    secondary: "#FF6B35",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  }
};
```

#### Replacing Videos

Place your video files in `frontend/pictures/` with the naming:
- `homepagevideo.mp4` - Homepage background
- `cityname video.mp4` - Book backgrounds

## Performance Optimization

- Videos are muted and play inline for better performance
- Images are lazy loaded
- Animations use CSS transforms for GPU acceleration
- Build is optimized with Vite for minimal bundle size

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**Videos not playing**
- Ensure videos are in the correct format (MP4 H.264)
- Check browser autoplay policies
- Verify file paths are correct

**Images not loading**
- Confirm images are in `/frontend/pictures/` directory
- Check file names match exactly (case-sensitive)
- Verify image paths in `cityBooks.js`

**Build errors**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear browser cache

## License

This project is created for educational and event purposes.

## Credits

- **Design & Development**: Interactive City Books Team
- **Content**: Cultural information about Indian cities
- **Typography**: Playfair Display, Poppins (Google Fonts)

---


