import { AxiosError } from 'axios';
// import { captureException } from '@sentry/nextjs';
import { ErrorOption } from 'react-hook-form';
import { showMessage } from './messages';

type CallbackFunction = (params?: unknown) => unknown;
type SetErrorFunction = (name: string, error: ErrorOption) => void;
type Error422 = {
  [key: string]: string;
};

type ParamProps = {
  setError: SetErrorFunction;
};

const handle500 = (error: AxiosError) => {
  // captureException(error);
  showMessage({
    title: 'Unexpected Error',
    message: 'An unexpected error ocurred. Please try again later.',
    type: 'error',
  });
};

const handle303 = () => {
  return null;
};

const handle400 = (error: AxiosError) => {
  // captureException(error);

  const { message } = error?.response?.data || {};
  showMessage({
    title: 'Error',
    message,
    type: 'error',
  });
};

const handle401 = (error: AxiosError) => {
  // captureException(error);
  const { code, message } = error?.response?.data || {};
  switch (code) {
    case 'organizations.pending':
      showMessage({
        title: 'Pending Approval',
        message,
        type: 'error',
      });
      break;
    case 'invalid.credential':
      showMessage({
        title: 'Invalid credentials.',
        message: 'Please verify your email and password.',
        type: 'error',
      });
      break;
    default:
      showMessage({
        title: 'Error',
        message,
        type: 'error',
      });
      break;
  }
};

const handle406 = (error: AxiosError) => {
  // captureException(error);

  const { message } = error?.response?.data || {};
  showMessage({
    title: 'Forbidden',
    message,
    type: 'error',
  });
};

const handle409 = (error: AxiosError) => {
  // captureException(error);

  const { message } = error?.response?.data || {};
  showMessage({
    title: 'Oops!',
    message,
    type: 'error',
    options: {
      autoClose: 8000,
    },
  });
};

const handle422 = (error: AxiosError, setError?: SetErrorFunction) => {
  const { errors } = error?.response?.data || {};

  errors?.forEach((err: Error422) => {
    if (setError) {
      setError(Object.keys(err)[0], {
        type: 'manual',
        message: String(Object.values(err)[0]),
      });
    } else {
      showMessage({
        message: String(Object.values(err)[0]),
        type: 'error',
      });
    }
  });

  // captureException(error);
};

const handlerFunction = (error: AxiosError, callback?: CallbackFunction, params?: ParamProps): unknown => {
  const { response } = error || {};

  if (!response) {
    handle500(error);
  }

  const status = response?.status;

  let handleResponse = null;

  switch (status) {
    case 303:
      handleResponse = () => handle303();
      break;
    case 400:
      handleResponse = () => handle400(error);
      break;
    case 401:
      handleResponse = () => handle401(error);
      break;
    case 406:
      handleResponse = () => handle406(error);
      break;
    case 409:
      handleResponse = () => handle409(error);
      break;
    case 422:
      handleResponse = () => handle422(error, params?.setError);
      break;
    default:
      handleResponse = () => handle500(error);
      break;
  }

  if (callback) callback();
  return handleResponse();
};

export const errorHandler = handlerFunction;
