
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Star,
  Smile,
  Sun,
  Flower2,
  Gift,
  Music,
} from "lucide-react";

const reasons = [
  {
    icon: Heart,
    number: "01",
    title: "You Understand Me",
    description:
      "I can be myself around you without worrying about being judged.",
    color: "pink",
  },
  {
    icon: Smile,
    number: "02",
    title: "You Make Me Laugh",
    description:
      "Even the most random conversations become unforgettable memories.",
    color: "peach",
  },
  {
    icon: Sun,
    number: "03",
    title: "You Bring Happiness",
    description:
      "Your presence can turn an ordinary day into a good one.",
    color: "yellow",
  },
  {
    icon: Flower2,
    number: "04",
    title: "You Have a Good Heart",
    description:
      "Your kindness is one of the things I appreciate most about you.",
    color: "purple",
  },
  {
    icon: Music,
    number: "05",
    title: "You're My Partner in Crime",
    description:
      "From random plans to endless chaos, life is never boring with you.",
    color: "blue",
  },
  {
    icon: Star,
    number: "06",
    title: "You're Irreplaceable",
    description:
      "Nobody else could ever be exactly who you are to me.",
    color: "rose",
  },
];

export default function Reasons() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="reasons-page">
      <header className="reasons-hero">
        <div className="reasons-sparkle sparkle-one">✦</div>
        <div className="reasons-sparkle sparkle-two">✧</div>
        <div className="reasons-sparkle sparkle-three">♡</div>

        <span className="reasons-eyebrow">
          <Heart size={15} fill="currentColor" />
          A LITTLE APPRECIATION
        </span>

        <h1>
          A Million Reasons,
          <br />
          <em>One Amazing You</em>
        </h1>

        <p>
          I could write a thousand things about you,
          but let's start with a few. ♡
        </p>

        <div className="reasons-heart-divider">
          <span />
          <Heart size={18} fill="currentColor" />
          <span />
        </div>
      </header>

      <section className="reasons-content">
        <div className="reasons-intro">
          <span>THE LITTLE THINGS THAT MATTER</span>
          <h2>
            Here's why you're <em>so special</em>
          </h2>
          <p>
            Tap any card to reveal a little message.
          </p>
        </div>

        <div className="reasons-cards">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            const isSelected = selected === reason.number;

            return (
              <button
                type="button"
                key={reason.number}
                className={`special-card ${reason.color} ${
                  isSelected ? "special-card-selected" : ""
                }`}
                onClick={() =>
                  setSelected(isSelected ? null : reason.number)
                }
                aria-expanded={isSelected}
              >
                <div className="special-card-top">
                  <span className="special-number">
                    {reason.number}
                  </span>
                  <Heart
                    className="small-heart"
                    size={18}
                    fill={isSelected ? "currentColor" : "none"}
                  />
                </div>

                <div className="special-icon">
                  <Icon size={27} />
                </div>

                <h3>{reason.title}</h3>

                <span className="special-hint">
                  {isSelected ? "A little message for you ↑" : "Tap to discover ♡"}
                </span>

                {isSelected && (
                  <div className="special-message">
                    <Sparkles size={16} />
                    <p>{reason.description}</p>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="reasons-quote">
          <Gift size={24} />
          <p>
            "The world is a little brighter simply because you're in it."
          </p>
          <span>— A little reminder for you ♡</span>
        </div>

        <div className="reasons-final">
          <span>AND THE MOST IMPORTANT REASON?</span>
          <h2>
            Because you're <em>you.</em> ♡
          </h2>
          <p>
            And that's already more than enough.
          </p>

          <Link to="/surprise" className="reasons-button">
            Ready for your surprise?
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <footer className="reasons-navigation">
        <Link to="/letter">
          <ArrowLeft size={16} />
          Back to the letter
        </Link>

        <Link to="/surprise">
          The final surprise
          <Heart size={16} />
        </Link>
      </footer>
    </main>
  );
}
