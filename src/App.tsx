import { MantineProvider } from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";
import MainPage from "./pages/MainPage";

function App() {
  const theme = {
    components: {
      Text: {
        styles: () => ({
          root: {
            color: 'black'
          }
        })
      },
      Flex: {
        styles: () => ({
          root: {
            backgroundColor: '#fffdfd'
          },
        }),
      },
    },
  }
  return (
    <MantineProvider theme={theme}>
      <MainPage/>
    </MantineProvider>
  );
}

export default App;
