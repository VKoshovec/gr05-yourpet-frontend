import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AuthForm } from 'components/Forms/AuthForm';

// import { useDispatch, useSelector } from 'react-redux';
// import { signup } from '../../redux/auth/operations';
// import { initialRegisterForm } from '../../presets/initial';

const RegisterPage = () => {
  // const dispatch = useDispatch();
  //
  // const handleSignup = data => {
  //   dispatch(signup(data))
  // };

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <AuthForm />
      </div>
    </HelmetProvider>
  );
};

export default RegisterPage;
