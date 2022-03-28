import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global";
import { theme } from "./theme";
import { About, Home } from "./Components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
      <About />
    </ThemeProvider>
  );
};

export default App;
