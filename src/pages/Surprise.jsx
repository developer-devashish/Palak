
import React, { useState } from "react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import {
  Heart,
  Gift,
  Sparkles,
  ArrowLeft,
  RotateCcw,
} from "lucide-react";

export default function Surprise() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const blowCandles = () => {
    setCandlesBlown(true);

    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.65 },
      colors: ["#ff6b9a", "#ffd166", "#c77dff", "#ffffff"],
    });

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 120,
        origin: { y: 0.6 },
      });
    }, 500);
  };

  const celebrateAgain = () => {
    setCandlesBlown(false);
    setShowMessage(false);
  };

  return (
    <main className="surprise-page">
      <div className="surprise-glow glow-one" />
      <div className="surprise-glow glow-two" />

      <section className="surprise-content">
        <div className="surprise-label">
          <Sparkles size={16} />
          THE BIG SURPRISE
          <Sparkles size={16} />
        </div>

        <h1 className="surprise-title">
          Make a <span>wish!</span>
        </h1>

        <p className="surprise-subtitle">
          One last little surprise for someone who means so much to me.
        </p>

        <div className="birthday-cake" aria-label="Birthday cake with candles">
          <div className="cake-candles">
            {[1, 2, 3].map((candle) => (
              <div className="candle" key={candle}>
                {!candlesBlown && <div className="flame" />}
                <div className="candle-stick" />
              </div>
            ))}
          </div>

          <div className="cake-top">
            <span className="icing-drip drip-one" />
            <span className="icing-drip drip-two" />
            <span className="icing-drip drip-three" />
          </div>

          <div className="cake-layer cake-layer-top">
            <span>♥</span>
            <span>✦</span>
            <span>♥</span>
          </div>

          <div className="cake-layer cake-layer-bottom">
            <span>♡</span>
            <span>♡</span>
            <span>♡</span>
            <span>♡</span>
          </div>

          <div className="cake-plate" />
        </div>

        {!candlesBlown ? (
          <button className="birthday-button" onClick={blowCandles}>
            <Sparkles size={19} />
            Blow the candles!
          </button>
        ) : (
          <div className="wish-complete">
            <h2>Wish made! ✨</h2>
            <p>
              I hope this new year of your life brings you everything
              your heart wishes for.
            </p>

            <button
              className="birthday-button"
              onClick={() => setShowMessage(true)}
            >
              <Gift size={19} />
              Open your final gift
            </button>
          </div>
        )}

        {showMessage && (
          <div className="final-birthday-message">
            <Heart className="final-heart" fill="currentColor" size={28} />

            <h2>Happy Birthday, Palak! 💗</h2>

            <p>
              Life is a little more fun, a little more chaotic, and
              a whole lot better with you in it. Thank you for being
              yourself, for all the laughs, and for all the memories
              we've made together.
            </p>

            <p>
              I hope you always have reasons to smile, courage to chase
              your dreams, and people around you who remind you how
              special you are.
            </p>

            <strong>Here's to more chaos, more memories, and more years of friendship! 🥂</strong>

            <div className="message-signature">
              Made with <Heart size={15} fill="currentColor" /> just for you
            </div>

            <button className="replay-button" onClick={celebrateAgain}>
              <RotateCcw size={16} />
              Celebrate again
            </button>
          </div>
        )}

        <div className="surprise-navigation">
          <Link to="/reasons" className="surprise-back-link">
            <ArrowLeft size={16} />
            Previous page
          </Link>

          <Link to="/" className="surprise-home-link">
            Back to the beginning <Heart size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
