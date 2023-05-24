import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { signup } from '../../redux/auth/operations';
import { schemaOfRegister } from './Yup';

import { MainButton } from 'components/buttons/MainButton';
import Section from 'components/Section/Section';

import { ReactComponent as EyeClosed } from '../assets/images/icon/eye-closed.svg';
import { ReactComponent as EyeOpen } from '../assets/images/icon/eye-open.svg';

import css from './Forms.module.scss';

export const AuthForm = () => {
  const dispatch = useDispatch();
  const [showPassword1, setShowPassword1] = useState(false); // стан для показу / приховування пароля першого інпута
  const [showPassword2, setShowPassword2] = useState(false);

  const handleShowPassword = () => {
    setShowPassword1(!showPassword1);
  };
  const handleShowPasswordConfirm = () => {
    setShowPassword2(!showPassword2);
  };

  const id = nanoid();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaOfRegister),
  });

  const watchPassword1 = watch('password1', '');
  const watchPassword2 = watch('password2', '');

  const validatePassword = () => {
    return watchPassword1 === watchPassword2 || "Passwords don't match";
  };

  const handleSubmitForm = ({ email, password1 }) => {
    console.log(password1);
    dispatch(signup({ email, password: password1 }));
    // reset();
  };

  return (
    <div className={css.bg}>
      <Section>
        <div className={css.authWrapper}>
          <div className={css.auth_form_wrap}>
            <h2 className={css.authFormTitle}>Registration</h2>
            <form
              className={css.authForm}
              onSubmit={handleSubmit(handleSubmitForm)}
              autoComplete="off"
            >
              <div className={css.authItem}>
                <input
                  id={id}
                  className={`${css.authInput} ${
                    errors.email ? css.error : ''
                  } ${watch('email') && !errors.email ? css.success : ''}`}
                  name="email"
                  type="email"
                  placeholder="Email"
                  {...register('email')}
                />
                {errors.email && (
                  <p className={css.errorsMassage}>{errors.email.message}</p>
                )}
              </div>

              <div className={css.authItem}>
                <input
                  id={id}
                  className={`${css.authInput} ${
                    errors.password1 ? css.error : ''
                  } ${
                    watch('password1') && !errors.password1 ? css.success : ''
                  }`}
                  name="password"
                  {...register('password1', { required: true })}
                  type={showPassword1 ? 'text' : 'password'}
                  placeholder="Password"
                />
                <button
                  className={css.authInputIsShow}
                  type="button"
                  onClick={handleShowPassword}
                >
                  {showPassword1 ? (
                    <EyeClosed className={css.passwordIcon} />
                  ) : (
                    <EyeOpen className={css.passwordIcon} />
                  )}
                </button>
                {errors.password1 && (
                  <p className={css.errorsMassage}>
                    {errors.password1.message}
                  </p>
                )}
              </div>

              <div className={css.authItem}>
                <input
                  name="passwordConfirm"
                  className={`${css.authInput} ${
                    errors.password2 ? css.error : ''
                  } ${
                    watch('password2') && !errors.password2 ? css.success : ''
                  }`}
                  type={showPassword2 ? 'text' : 'password'}
                  {...register('password2', {
                    validate: validatePassword,
                  })}
                  placeholder="Confirm password"
                />

                <button
                  className={css.authInputIsShow}
                  type="button"
                  onClick={handleShowPasswordConfirm}
                >
                  {showPassword2 ? (
                    <EyeClosed className={css.passwordIcon} />
                  ) : (
                    <EyeOpen className={css.passwordIcon} />
                  )}
                </button>

                {errors.password2 && (
                  <p className={css.errorsMassage}>
                    {errors.password2.message}
                  </p>
                )}
              </div>

              <MainButton>Registration</MainButton>

              <div className={css.linkWrap}>
                Already have an account?
                <Link className={css.link} to="/login">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};
