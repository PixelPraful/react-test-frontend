import { API_VERSION } from '../actions/AppVarContants';

const BASE_URL = process.env.REACT_APP_BUILD_ENV === 'prod' ? '' : '';

export const USER_LOGIN_URL = `${BASE_URL}auth/${API_VERSION}/login`;
export const USER_LOGOUT_URL = `${BASE_URL}auth/${API_VERSION}/logout`;
