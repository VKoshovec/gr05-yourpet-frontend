import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { signin } from '../../redux/auth/operations';

import BaseInput from 'components/fields/baseInput';
import { MainButton } from 'components/buttons/MainButton';
import { validationFormLogin } from 'helpers';
import Section from 'components/Section/Section';

import css from './Forms.module.scss';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const dataForm = Object.fromEntries(Array.from(new FormData(e.target)));
    const { email, password } = dataForm;
    const errors = validationFormLogin(dataForm);
    if (Object.keys(errors).length > 0) {
      const errorMessages = Object.values(errors).join('\n');
      return toast.error(errorMessages);
    }
    dispatch(signin({ email, password }));
    // try {
    // const res = await dispatch(signin({ email, password }));
    // if (!res.payload.success) throw new Error(res.payload.errorCode);
    // } catch (error) {
    // console.log(error);
    // }
  };

  return (
    <div className={css.bg}>
      <Section>
        <div className={css.authWrapper}>
          <div className={css.auth_form_wrap}>
            <h2 className={css.authFormTitle}>Login</h2>
            <form
              className={css.authForm}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div className={css.authItem}>
                <BaseInput name="email" type="email" placeholder="Email" />
              </div>
              <div className={css.authItem}>
                <BaseInput
                  name="password"
                  type="password"
                  placeholder="Password"
                  isShow
                />
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
