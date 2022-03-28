import styled, { createGlobalStyle } from "styled-components";
import { ReactComponent as Logo } from "./assets/wave.svg";
const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	html{
	scroll-behavior: smooth;
	}
	body{
		background: ${({ theme }) => theme.bgColor};
		font-family: 'Raleway', sans-serif;
	}
`;

export const Wave = styled(Logo)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default GlobalStyles;
