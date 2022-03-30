import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global";
import { theme } from "./theme";
import { About, Contact, Home } from "./Components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
      <About />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
