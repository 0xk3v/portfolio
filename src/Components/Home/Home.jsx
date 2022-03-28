import { Wave } from "../../global";
import {
  GitHubIcon,
  HomeContent,
  HomeWrapper,
  Nav,
  Terminal,
} from "./Home.style";

const Home = () => {
  return (
    <HomeWrapper id="home">
      <Nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="icons">
          <a href="https://github.com/n-kev1n">
            <GitHubIcon />
          </a>
        </div>
      </Nav>
      <HomeContent>
        <h1 className="bold">Hello,</h1>
        <h1>I&apos;m Kevin</h1>
        <Terminal>
          $ I create, design and develop websites...
          <span className="cursor">.</span>
        </Terminal>
      </HomeContent>
      <Wave />
    </HomeWrapper>
  );
};

export default Home;
