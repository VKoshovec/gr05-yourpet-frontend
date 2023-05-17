export const initialData = {
  pets: [],
  news: [],
  frends: [],
};

export const initialValues = {
  id: '',
  name: '',
  number: '',
};

export const initialLocal = {
  filter: '',
  error: null,
  isLoading: false,
  modalShow: false,
};

export const initialAuth = {
  user: { _id: null, name: null, email: null, birthDay: null, phone: null, city: null, pets: []},
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const initialContactForm = {
  name: '',
  number: '',
};

export const initialLoginForm = {
  email: '',
  password: '',
};

export const initialRegisterForm = {
  email: '',
  password: '',
  confirmPassword: '',
};