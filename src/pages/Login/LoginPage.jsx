import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/Forms/LoginForm';
// import { useDispatch, useSelector } from 'react-redux';
//
// import LoginForm from '../../components/LoginForm/LoginForm';
// import { signup } from '../../redux/auth/operations';
// import { initialRegisterForm } from '../../presets/initial';

const LoginPage = () => {
  // const dispatch = useDispatch();
  //
  // const handleLogin = data => dispatch(login(data));
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Sing In</title>
        </Helmet>
        <LoginForm />
      </div>
    </HelmetProvider>
  );
};
export default LoginPage;
