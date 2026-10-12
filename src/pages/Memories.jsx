
import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Sparkles,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const herPhotos = [
  {
    image: "public/images/Her1.png",
    title: "That Beautiful Smile",
    caption: "Never stop smiling. It suits you so well. 💗",
    style: "photo-pink",
  },
  {
    image: "public/images/Her2.png",
    title: "Main Character Energy",
    caption: "Because being iconic comes naturally to you. ✨",
    style: "photo-lavender",
  },
  {
    image: "public/images/Her3.png",
    title: "Simply You",
    caption: "No special reason needed. You're special anyway. 🌸",
    style: "photo-peach",
  },
  {
    image: "public/images/Her4.png",
    title: "Your Kind of Magic",
    caption: "Keep being the wonderfully unique person you are. 🦋",
    style: "photo-pink",
  },
  {
    image: "public/images/Her5.png",
    title: "A Little Appreciation",
    caption: "Just a reminder that you're appreciated more than you know. 💕",
    style: "photo-peach",
  },
  {
    image: "public/images/Her6.png",
    title: "Birthday Girl!",
    caption: "Today, the spotlight belongs to you. 🎂",
    style: "photo-lavender",
  },
];

export default function Memories() {
  return (
    <main className="memories-page">
      <header className="memories-heading">
        <span className="memories-badge">
          <Sparkles size={16} />
          A LITTLE GALLERY OF YOU
        </span>

        <h1>
          A Gallery of <span>My Bestie</span>
        </h1>

        <p>
          We might not have pictures together, but that doesn't mean
          we can't celebrate all the little things that make you amazing.
          This little corner is all yours. 💗
        </p>
      </header>

      <section className="her-gallery">
        {herPhotos.map((photo, index) => (
          <article
            className={`her-photo-card ${photo.style}`}
            key={photo.image}
          >
            <div className="her-photo-frame">
              <img
                src={photo.image}
                alt={photo.title}
                loading="lazy"
              />
              <span className="photo-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="her-photo-caption">
              <h2>{photo.title}</h2>
              <p>{photo.caption}</p>
              <Heart size={17} fill="currentColor" />
            </div>
          </article>
        ))}
      </section>

      <div className="memories-footer">
        <Heart size={21} fill="currentColor" />
        <p>
          No pictures together? No problem.
          <br />
          There's still plenty to celebrate about you.
        </p>
      </div>

      <nav className="memories-navigation">
        <Link to="/" className="memory-nav-link">
          <ArrowLeft size={17} />
          Home
        </Link>

        <Link to="/letter" className="memory-next-link">
          A Letter for You
          <ArrowRight size={17} />
        </Link>
      </nav>
    </main>
  );
}
