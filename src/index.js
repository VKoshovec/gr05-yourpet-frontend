import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from 'components/App';
import { ThemeProvider } from 'styled-components';
import theme from './presets/theme';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);