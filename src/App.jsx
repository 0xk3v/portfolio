import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global";
import { theme } from "./theme";
import { Home } from "./Components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
};

export default App;
