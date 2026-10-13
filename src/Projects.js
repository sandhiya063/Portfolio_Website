import React from 'react'


import { useState, useEffect } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/c/8a04-6b53-42b7-bb79")
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load projects.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="section">
      <h1>My Projects</h1>

      {loading && <p>Loading projects...</p>}
      {error && <p>{error}</p>}

      <div className="projects-container">
        {Projects.map((i) => (
          <div className="project-card" >
            <h3>{i.title}</h3>
            <p>{i.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
