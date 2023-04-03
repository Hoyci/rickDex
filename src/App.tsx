import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './assets/styles/default';
import GlobalStyles from './assets/styles/global';
import Navbar from './components/Navbar';
import Character from './pages/character';
import Home from './pages/home';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters/:id" element={<Character />} />
          </Routes>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
