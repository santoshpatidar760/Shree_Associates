import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import "../styles/ScrollToUp.css"; // create this file for styling

const ScrollToUp = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    visible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        <ArrowUp size={24} />
      </button>
    )
  );
};

export default ScrollToUp;
