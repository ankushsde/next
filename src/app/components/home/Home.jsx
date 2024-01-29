import React from "react";
import profileImg from "../../../assets/profile_img.png";
import shape1 from "../../../assets/shape-1.png";
 
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./home.css";
import Image from "next/image";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <p className="home__subtitle text-cs">
          Hello, <span>My Name Is</span>
        </p>
        <h1 className="home__title text-cs">
          <span>Ankush</span> 
        </h1>

        <p className="home__job">
          <span className="text-cs">I Am </span> <b>Software Developer</b>
        </p>

        <div className="home__img-wrapper">
          <div className="home__banner">
            <Image
              src={profileImg}
              alt=""
              className="home__profile"
              width={854}
              height={1190}
            />
          </div>
          
          <p className="home__data home__data-one">
            <span className="text-lg">
                3<b>+</b>
            </span>
            <span className="text-sm text-cs">
                Years of <span>Experience</span>
            </span>
          </p>

          <p className="home__data home__data-two">
            <span className="text-lg">
                8 <b></b>
            </span>
            <span className="text-sm text-cs">
                Completed <span>Projects</span>
            </span>
          </p>

          {/* <Image src={shape1} alt="" className="shape shape__1" /> */}

        </div>

        <p className="home__text">
          From Himachal Pradesh, India. I have rich expereince in Software
          Development, also I am good at providing full stack devlopment
          solutions.
        </p>

        <div className="home__socials">
          <a href="https://github.com/ankushsde" className="home__social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ankushsrj/" className="home__social-link">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/ankushs5252" className="home__social-link">
            <SiLeetcode />
          </a>
        </div>
        <div className="home__btns">
          <a href=" " className="btn text-cs">
            Download CV
          </a>
          <a href="" className="hero__link text-cs">
            My skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
