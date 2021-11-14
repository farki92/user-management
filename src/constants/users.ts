import {TUserDto} from 'declarations';

export const DEFAULT_USER_FORM_DATA: TUserDto = {
  email: '',
  firstName: '',
  lastName: '',
  country: '',
  title: '',
  balance: 0
};

export const USER_FORM_DATA_INPUTS = [
  {key: 'email', input: 'text', props: {label: 'Email:'}, required: true},
  {
    key: 'firstName',
    input: 'text',
    props: {label: 'First name:'},
    required: true
  },
  {
    key: 'lastName',
    input: 'text',
    props: {label: 'Last name:'},
    required: true
  },
  {
    key: 'country',
    input: 'countryDropdown',
    props: {label: 'Country:'},
    required: true
  },
  {key: 'title', input: 'text', props: {label: 'Title:'}, required: true},
  {key: 'balance', input: 'number', props: {label: 'Balance:'}, required: true}
];
