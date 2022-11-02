import { toast, ToastOptions } from 'react-toastify';

type ShowMessageType = 'error' | 'success' | 'warning' | 'info';

type ShowMessageProps = {
  title?: string;
  message: string;
  type?: ShowMessageType;
  options?: ToastOptions;
};

export function showMessage({
  title = '',
  message,
  type = 'success',
  options = { autoClose: 5000, position: 'top-right', theme: 'colored', hideProgressBar: true },
}: ShowMessageProps): void {
  const toastMessage = message ? `${title || ''}${title && message ? ' - ' : ''}${message || ''}` : message || '';

  const optionDefaults: ToastOptions = {
    ...{ autoClose: 5000, position: 'top-right', theme: 'colored', hideProgressBar: true },
    ...options,
  };

  switch (type) {
    case 'error':
      toast.error(toastMessage, optionDefaults);
      break;

    case 'warning':
      toast.warn(toastMessage, optionDefaults);
      break;

    case 'info':
      toast.info(toastMessage, optionDefaults);
      break;

    default:
      toast.success(toastMessage, optionDefaults);
      break;
  }
}
