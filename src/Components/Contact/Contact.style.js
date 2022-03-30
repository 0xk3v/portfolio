import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #fff;
  background: ${({ theme }) => theme.bgColor2};
`;

export const ContactContents = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  z-index: 10;
  background: ${({ theme }) => theme.bgColor2};
  a {
    padding: 0 1rem;
    text-decoration: none;
    color: #fff;
    font-family: "Source Sans Pro", sans-serif;
  }
  .mail,
  .github {
    display: flex;
    justify-conten: center;
    align-items: center;
  }
`;
