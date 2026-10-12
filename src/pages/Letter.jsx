
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Mail,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const FRIEND_NAME = "Palak"; 

export default function Letter() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="letter-page">
      <div className="letter-background-heart heart-a">♡</div>
      <div className="letter-background-heart heart-b">✦</div>
      <div className="letter-background-heart heart-c">♡</div>

      <header className="letter-page-heading">
        <span className="letter-eyebrow">
          <Mail size={15} />
          A LITTLE SOMETHING FROM MY HEART
        </span>

        <h1>
          Words I Don't Always <em>Say</em> ♡
        </h1>

        <p>
          Some things are better written from the heart.
          This little letter is just for you.
        </p>
      </header>

      {!opened ? (
        <section className="envelope-area">
          <div className="envelope" onClick={() => setOpened(true)}>
            <div className="envelope-back" />

            <div className="envelope-letter">
              <Heart size={30} fill="currentColor" />
              <span>A letter for {FRIEND_NAME}</span>
            </div>

            <div className="envelope-flap" />

            <div className="envelope-front">
              <div className="wax-seal">
                <Heart size={27} fill="currentColor" />
              </div>
            </div>
          </div>

          <button
            className="open-letter-button"
            onClick={() => setOpened(true)}
          >
            <Mail size={17} />
            Open your letter
            <Sparkles size={16} />
          </button>

          <p className="envelope-hint">
            Made with love, sealed with a little magic ♡
          </p>
        </section>
      ) : (
        <section className="revealed-letter">
          <div className="letter-top-decoration">♡ ✦ ♡</div>

          <article className="letter-content">
            <span className="letter-date">A NOTE JUST FOR YOU</span>

            <h2>
              Dear <em>{FRIEND_NAME}</em>,
            </h2>

            <p>
              I don't think you realise how special you are to me.
              Sometimes people enter our lives unexpectedly, and
              before we even notice, they become such an important
              part of our everyday happiness.
            </p>

            <p>
              Thank you for every random conversation, every stupid
              joke, every laugh, and every moment when we did
              absolutely nothing but still had the best time.
            </p>

            <p>
              Thank you for being someone I can be myself around.
              No pretending, no formalities, just me being me and
              all our endless chaos.
            </p>

            <p>
              On your birthday, I wish you happiness that lasts,
              success that makes you proud, people who genuinely
              care about you, and memories that make you smile
              whenever you think about them.
            </p>

            <p>
              No matter how busy life gets, I hope we always find
              reasons to laugh together and make more memories.
              You deserve so many beautiful things in life.
            </p>

            <p className="letter-wish">
              Happy Birthday, my favourite human! 💗
            </p>

            <div className="letter-signature">
              <span>With lots of love,</span>
              <strong>Your favourite headache</strong>
              <Heart size={21} fill="currentColor" />
            </div>
          </article>

          <button
            className="close-letter-button"
            onClick={() => setOpened(false)}
          >
            Fold the letter again ♡
          </button>
        </section>
      )}

      <footer className="letter-page-navigation">
        <Link to="/memories">
          <ArrowLeft size={16} /> Memories
        </Link>

        <Link to="/reasons">
          Next: Why You're Special <ArrowRight size={16} />
        </Link>
      </footer>
    </main>
  );
}
