import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router";
function Home() {
  const [showMore, setShowMore] = useState(false);
useEffect(() => {
    document.title = "Sandhiya | Portfolio";
  }, []);
return (
    <section className="hero">
      <p>Hello, I'm</p>
      <h1>Sandhiya Nagarajan</h1>
      <h2>Computer Science Engineering Student</h2>
      <p>
        I am interested in Java, React and web development.
      </p>
      
     </section>

      
      
  );
}

export default Home;