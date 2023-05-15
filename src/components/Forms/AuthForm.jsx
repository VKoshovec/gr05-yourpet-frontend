import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { signup } from '../../redux/auth/operations';
import { validationAuthForm } from 'helpers';

import Section from 'components/Section/Container';
import Container from 'components/Container/Container';
import BaseInput from 'components/fields/baseInput';
import { MainButton } from 'components/buttons/MainButton';

import css from './Forms.module.scss';

export const AuthForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    const dataForm = Object.fromEntries(Array.from(new FormData(e.target)));
    const { email, password, confirm_password } = dataForm;

    const errors = validationAuthForm(dataForm);
    if (Object.keys(errors).length > 0) {
      const errorMessages = Object.values(errors).join('\n');
      return toast.error(errorMessages);
    }

    try {
      const res = await dispatch(signup({ email, password, confirm_password }));
      if (!res.payload.success) throw new Error(res.payload.errorCode);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
      <Container>
        <div className={css.authWrapper}>
          <div className={css.auth_form_wrap}>
            <h2 className={css.authFormTitle}>Registration</h2>
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

              <div className={css.authItem}>
                <BaseInput
                  name="confirm_password"
                  type="password"
                  placeholder="Confirm password"
                  isShow
                />
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
      </Container>
    </Section>
  );
};
