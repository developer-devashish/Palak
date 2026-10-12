
import React from "react";
import { Link } from "react-router-dom";
import { Heart, Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="home-page">
      <span className="home-decoration home-decoration-one">♡</span>
      <span className="home-decoration home-decoration-two">✦</span>
      <span className="home-decoration home-decoration-three">✧</span>
      <span className="home-decoration home-decoration-four">♡</span>

      <section className="home-content">
        <div className="home-badge">
          <Sparkles size={17} />
          <span>A LITTLE SOMETHING FOR YOU</span>
        </div>

        <h1 className="home-title">
          Happy Birthday,
          <span className="home-title-highlight">
            Palak! <span className="home-emoji">💗</span>
          </span>
        </h1>

        <p className="home-description">
          Today is all about celebrating you! I've created a little
          corner of the internet filled with memories, heartfelt
          words, and a few surprises just for you.
        </p>

        <Heart
          className="home-heart"
          size={42}
          fill="currentColor"
        />

        <div>
          <Link to="/memories" className="home-button">
            Let's Begin
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
