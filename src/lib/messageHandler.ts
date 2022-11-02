import { ApiResponse } from 'types/apiResponse';
import { showMessage } from './messages';

export const messageHandler = (response: ApiResponse) => {
  showMessage({ message: response.message });
};
