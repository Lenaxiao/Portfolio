import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

const HomeBrief = ({ words }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [txt, setTxt] = useState("");

  // Do NOT fire effect every time the component gets rendered!! (timers will be in a mess)
  useEffect(() => {
    let speed = 200;
    if (isDeleting) speed = 150;
    if (!isDeleting && txt === words[wordIndex]) speed = 1500;

    const typeWriter = () => {
      if (!isDeleting && txt === words[wordIndex]) {
        setIsDeleting(true);
      } else if (isDeleting && txt === "") {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setTxt(currentWord.substring(0, txt.length - 1));
      } else {
        setTxt(currentWord.substring(0, txt.length + 1));
      }
    };
    const timer = setTimeout(() => typeWriter(), speed);
    return () => clearTimeout(timer); // prevent memory leak
  }, [isDeleting, wordIndex, txt, words]);

  return (
    <section className="home-brief-card" id="home">
      <h1>Home</h1>
      <p>
        <span className="type-effect">{txt}</span>
      </p>
      <div className="next-page-icon">
        <Link smooth to="/#about">
          <i className="huge arrow alternate circle down outline icon"></i>
        </Link>
      </div>
    </section>
  );
};

export default HomeBrief;
