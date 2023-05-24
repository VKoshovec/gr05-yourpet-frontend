import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { signin } from '../../redux/auth/operations';
import { schemaOfLogin } from './Yup';

import { MainButton } from 'components/buttons/MainButton';
import Section from 'components/Section/Section';

import { ReactComponent as EyeClosed } from '../assets/images/icon/eye-closed.svg';
import { ReactComponent as EyeOpen } from '../assets/images/icon/eye-open.svg';

import css from './Forms.module.scss';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const id = nanoid();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaOfLogin),
  });

  const handleSubmitForm = data => {
    dispatch(signin(data));
    reset();
  };

  return (
    <div className={css.bg}>
      <Section>
        <div className={css.authWrapper}>
          <div className={css.auth_form_wrap}>
            <h2 className={css.authFormTitle}>Login</h2>
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
                    errors.password ? css.error : ''
                  } ${
                    watch('password') && !errors.password ? css.success : ''
                  }`}
                  {...register('password')}
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                <button
                  className={css.authInputIsShow}
                  type="button"
                  onClick={handleShowPassword}
                >
                  {showPassword ? (
                    <EyeClosed className={css.passwordIcon} />
                  ) : (
                    <EyeOpen className={css.passwordIcon} />
                  )}
                </button>

                {errors.password && (
                  <p className={css.errorsMassage}>{errors.password.message}</p>
                )}
              </div>

              <MainButton>Login</MainButton>
              <div className={css.linkWrap}>
                Don't have an account?
                <Link className={css.link} to="/register">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};
