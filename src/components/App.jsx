import Router from './Router.jsx';
import Loader from './Loader/Loader.jsx';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectIsLoading } from '../redux/local/selectors.js';
const App = () => {
  const isLoading = useSelector(selectIsLoading);
  console.log(isLoading);
  return (
    <>
      <Router />
      {isLoading && <Loader />}
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
