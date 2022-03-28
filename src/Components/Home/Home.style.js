import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const Nav = styled.nav`
  height: 80px;
  padding: 0 15%;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  background: ${({ theme }) => theme.bgColor};
  .icons {
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.textColor};
    }
  }
  ul {
    list-style: none;
    display: flex;

    li {
      width: 100px;
      a {
        font-family: "Source Sans Pro", sans-serif;
        font-size: 18px;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        color: ${({ theme }) => theme.textColor};
      }
    }
  }
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 85vh;
  width: 70%;
  margin: 0 auto;
  padding-top: 5em;
  h1 {
    font-size: 60px;
  }
  .bold {
    font-family: "Source Sans Pro", sans-serif;
  }
`;

export const GitHubIcon = styled(BsGithub)`
  font-size: 25px;
`;

export const Terminal = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  font-family: "Source Code Pro", monospace;
  border-radius: 6px;
  background: black;
  max-width: 500px;
  color: ${({ theme }) => theme.secondaryColor};

  span {
    margin: 0 0.3rem;
    animation: cursor 1.5s infinite;
    background: ${({ theme }) => theme.secondaryColor};

    @keyframes cursor {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
