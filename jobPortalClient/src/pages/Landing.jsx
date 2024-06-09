import React, { useEffect, useRef } from "react";
import Wrapper from "../assets/css/wrappers/LandingPage";
import { Link } from "react-router-dom";
import photo from "../assets/media/LandingPage/hero.png";
import Navbar from "../components/shared/Navbar";

const Landing = () => {
  const navbarRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const navbarHeight = navbarRef.current.getBoundingClientRect().height;
    heroRef.current.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
  }, []);
  return (
    <>
      <Navbar navbarRef={navbarRef} />
      <Wrapper ref={heroRef}>
        <div className="hero-content">
          <div className="text-content">
            <h1>
              Get Your <span className="fancy">Dream Job </span>
              Today!
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              perferendis dignissimos eligendi voluptas exercitationem, eius aut
              mollitia quasi nisi voluptatem similique, tempore totam, odit
              repellendus non. Dolores eos animi recusandae.
            </p>
            <div className="btn-grp">
              <Link className="btn" to="/all-jobs">
                Apply Now
              </Link>
            </div>
          </div>
          <div className="placeholder">
            <img src={photo} alt="job viva photo" />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Landing;
