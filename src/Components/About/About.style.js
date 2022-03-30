import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top: -4px;
  color: #fff;
  font-family: "Source Sans Pro", sans-serif;
  background: ${({ theme }) => theme.bgColor2};
  @media screen and (max-width: 600px) {
    padding: 5rem 0;
    height: auto;
  }
`;

export const AboutContent = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  z-index: 2;
  h1 {
    font-size: 50px;
    margin: 2rem 0;
  }
  .about-me {
    width: 50%;
    p {
      font-size: 1.2rem;
    }
    ul {
      list-style: none;
      a {
        color: #ffffff;
        font-size: 1.2rem;
      }
    }
  }
  .skills {
    width: 50%;
    padding: 0 5rem;
    .skill-icons {
      font-size: 4rem;
      color: #fff;
      display: grid;
      gap: 4rem 0;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    .about-me,
    .skills {
      width: 100%;
      text-align: center;
    }
    .skills {
      display: flex;
      flex-direction: column;
      align-items: center;
      .skill-icons {
        gap: 1rem 0;
      }
    }
  }
`;
