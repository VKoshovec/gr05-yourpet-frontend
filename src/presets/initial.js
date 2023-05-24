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
  // filter: '',
  error: null,
  isLoading: false,
  // modalShow: false,
};

export const initialAuth = {
  user: {
    _id: null,
    name: null,
    email: null,
    birthDay: null,
    phone: null,
    city: null,
    avatarURL: null,
  },
  token: null,
  isLoggedIn: false,
};

export const initialNotices = {
  notices: {
    data: [],
    page: 0,
    perPage: 0,
  },
  additionalFilter: {
    byAge: {
      '1year': false,
      '2year': false,
      '3-12m': false,
    },
    byGender: {
      female: false,
      male: false,
    },
  },
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
