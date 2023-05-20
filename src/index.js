import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import 'modern-normalize';
import { store, persistor } from './redux/store';
import App from 'components/App';
import './styles/index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
