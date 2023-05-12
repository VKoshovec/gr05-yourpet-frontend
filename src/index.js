import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import 'modern-normalize';
import { store, persistor } from './redux/store';
import theme from './presets/theme';
import App from 'components/App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
