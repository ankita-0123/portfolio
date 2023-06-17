import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { saveAs } from "file-saver";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const handleDownloadResume = () => {
    const resumeUrl = "https://drive.google.com/file/d/1wdairkefjc8qXzDXLFjUYACmrhYs0Y3p/view?usp=drivesdk"; 
    saveAs(resumeUrl, "Resume.pdf");
  };

  return (
    <section className="home">
      <div className="home__text-wrapper">
        <h1>
          Hii, I'm Pragyan Paramita Patra
          <br />
          Frontend Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={2}
        start={{
          transform: "translateY(500px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
      <footer className="home__footer">
        <div className="home__footer__links">
          <a href="https://github.com/ankita-0123/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/pragyan-paramita-patra-30b7a9232/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <button className="home__footer__download" onClick={handleDownloadResume}>
            <BsDownload size={20} />
            Download Resume
          </button>
        </div>
      </footer>
    </section>
  );
};

export default Home;

