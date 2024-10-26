import React from "react";
import { useNavigate } from "react-router-dom"
import "./styles.css"
const Home = () => {
  const navigate = useNavigate();

  function handleNavigateToContactMePage() {
    navigate("/contact")
  }
  return (
    <section id="home" className="home">
      <div className="home-text-wrapper">
        <h1>
          Hello I'm Anup.
          <br />
          front end Developer
        </h1>
      </div>
      <br />
      <div className="home-contactMe">

        <button onClick={handleNavigateToContactMePage}>Hire Me</button>
      </div>
    </section>
  )
}

export default Home