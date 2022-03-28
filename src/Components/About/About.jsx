import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { MdOpenInNew } from "react-icons/md";
import { AboutContent, AboutWrapper } from "./About.style";

const About = () => {
  return (
    <AboutWrapper id="about">
      <AboutContent>
        <div className="about-me">
          <h1>About me</h1>
          <p>
            I am a front-end developer who enjoys designing, creating and
            developing websites (Mostly with Javascript).
          </p>
          <br />
          <p>
            Other Skills: Responsive Web Design, Communication, Problem
            Solving,...
          </p>
          <h1>Projects</h1>
          <ul>
            <li>
              <a
                href="https://netflix-reactclone.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Netflix Clone &nbsp;
                <MdOpenInNew />
              </a>
            </li>
            <li>
              <a href="https://hulu-clone-000.netlify.app/">
                Hulu Clone &nbsp;
                <MdOpenInNew />
              </a>
            </li>
            <li>
              <a href="https://github.com/n-kev1n">
                More on Github &nbsp;
                <MdOpenInNew />
              </a>
            </li>
          </ul>
        </div>
        <div className="skills">
          <h1>Skills</h1>
          <div className="skill-icons">
            <FaHtml5 />
            <FaCss3Alt />
            <FaJs />
            <FaSass />
            <FaReact />
            <FaGitAlt />
            <SiTypescript />
            <FaPython />
            <FaNodeJs />
          </div>
        </div>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;
