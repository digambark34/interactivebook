// src/data/cityBooks.js

const cityBooks = {
  Kolkata: [
    {
      title: "Welcome to Kolkata",
      text: "Known as the 'City of Joy', Kolkata stands as the cultural capital of India. Located on the banks of the Hooghly River, it is famous for its art, literature, festivals, and colonial architecture. The city reflects a perfect blend of tradition and modernity.",
      image: "/pictures/kolkata1.jpg",
    },
    {
      title: "History of Kolkata",
      text: "Kolkata was founded as an East India Company trading post in 1690. It became the capital of British India until 1911. The city played a central role in India's independence movement and was home to prominent freedom fighters and intellectuals.",
      image: "/pictures/kolkata2.jpg",
    },
    {
      title: "Cultural Heritage",
      text: "Kolkata is synonymous with art and culture — from Rabindranath Tagore's poetry to Satyajit Ray's cinema. The city is dotted with theaters, art galleries, and book cafes, and hosts Asia's largest book fair every year.",
      image: "/pictures/kolkata3.jpg",
    },
    {
      title: "Durga Puja Festival",
      text: "Durga Puja is the heart of Kolkata's festive calendar. For five days, the city glows with colorful lights, artistic pandals, and joyful crowds celebrating the victory of good over evil.",
      image: "/pictures/kolkata4.jpg",
    },
    {
      title: "The Spirit of Kolkata",
      text: "Kolkata is not just a city — it's an emotion. A place where every street tells a story, every festival feels like family, and art lives in every corner.",
      image: "/pictures/kolkata1.jpg",
    },
  ],

  Varanasi: [
    {
      title: "Welcome to Varanasi",
      text: "Varanasi, also known as Kashi or Benaras, is the spiritual heart of India. Situated on the banks of the River Ganga, it's one of the world's oldest continuously inhabited cities and a center of Hindu philosophy.",
      image: "/pictures/varanasi1.jpg",
    },
    {
      title: "Ancient History",
      text: "According to mythology, Varanasi was founded by Lord Shiva himself. It has been a seat of learning, faith, and culture for over 3,000 years and finds mention in sacred texts like the Rigveda.",
      image: "/pictures/varanasi2.jpg",
    },
    {
      title: "Religious Significance",
      text: "Hindus believe that dying in Varanasi and being cremated on the banks of the Ganga leads to salvation. Every sunrise brings chants, rituals, and holy dips that fill the air with divine energy.",
      image: "/pictures/varanasi3.jpg",
    },
    {
      title: "Ganga Aarti Experience",
      text: "Every evening, priests perform the Ganga Aarti with lamps, chants, and bells, creating a divine spectacle that mesmerizes every visitor. It's a sight of devotion and peace.",
      image: "/pictures/varanasi4.jpg",
    },
    {
      title: "Timeless Varanasi",
      text: "A city older than history, older than legend — Varanasi stands eternal. Every traveler leaves touched by its spirituality and grace.",
      image: "/pictures/varanasi5.jpg",
    },
  ],

  Jaipur: [
    {
      title: "Welcome to Jaipur",
      text: "Jaipur, the capital of Rajasthan, is known as the 'Pink City' for its trademark terracotta architecture. Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is a perfect blend of heritage and modernity.",
      image: "/pictures/jaipur1.jpg",
    },
    {
      title: "Royal Heritage",
      text: "Jaipur's royal lineage is reflected in its grand palaces and forts. Amber Fort, Nahargarh, and City Palace narrate stories of valor, art, and architecture.",
      image: "/pictures/jaipur2.jpg",
    },
    {
      title: "Architecture & City Design",
      text: "Planned according to Vedic architecture, Jaipur was India's first planned city. Its grid structure and pink buildings represent harmony and hospitality.",
      image: "/pictures/jaipur3.jpg",
    },
    {
      title: "Cultural Life",
      text: "Jaipur thrives with folk music, dance, and colorful attire. The city celebrates its culture through festivals like Teej and Gangaur, showcasing Rajasthani traditions.",
      image: "/pictures/jaipur4.jpg",
    },
    {
      title: "Jaipur — The Pink Jewel",
      text: "Jaipur captures the spirit of Rajasthan — royal, colorful, and timeless. A journey here is like stepping into a living postcard.",
      image: "/pictures/jaipur5.jpg",
    },
  ],

  Mumbai: [
    {
      title: "Welcome to Mumbai",
      text: "Mumbai, the 'City of Dreams', is India's financial capital and home to Bollywood. It's a city that never sleeps, radiating energy, diversity, and ambition.",
      image: "/pictures/mumbai1.jpg",
    },
    {
      title: "Colonial Heritage",
      text: "Once a group of seven islands, Mumbai became a major British trading port. Its architecture features Gothic, Victorian, and modern influences.",
      image: "/pictures/mumbai2.jpg",
    },
    {
      title: "Bollywood & Entertainment",
      text: "Mumbai is the heart of Indian cinema. From Film City to Marine Drive, the city lives and breathes film, music, and glamour.",
      image: "/pictures/mumbai3.jpg",
    },
    {
      title: "Beaches & Sea Life",
      text: "Chowpatty, Juhu, and Versova beaches are popular hangouts. The Arabian Sea adds a calm backdrop to the city's fast-paced life.",
      image: "/pictures/mumbai4.jpg",
    },
    {
      title: "Mumbai Forever",
      text: "A city of resilience, dreams, and endless opportunities — Mumbai defines modern India's spirit of progress and passion.",
      image: "/pictures/mumbai5.jpg",
    },
  ],
};

export const cityVideos = {
  Kolkata: "/pictures/kolkatavideo.mp4",
  Varanasi: "/pictures/varanasivideo.mp4",
  Jaipur: "/pictures/jaipurvideo.mp4",
  Mumbai: "/pictures/mumbaivideo.mp4",
  Home: "/pictures/homepagevideo.mp4"
};

export const cityColors = {
  Kolkata: {
    primary: "#FFD700",
    secondary: "#FF6B35",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  Varanasi: {
    primary: "#FF9933",
    secondary: "#138808",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  Jaipur: {
    primary: "#FF69B4",
    secondary: "#FFD700",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
  },
  Mumbai: {
    primary: "#00CED1",
    secondary: "#FF4500",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  }
};

export default cityBooks;
