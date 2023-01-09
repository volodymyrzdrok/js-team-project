import { onReject } from '../utils/utils';

export function getDataLocalStorage(key_constanta) {
  try {
    const data = localStorage.getItem(key_constanta);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    onReject(error);
  }
}

export function saveDataLocalStorage(key_constanta, items) {
  try {
    localStorage.setItem(key_constanta, JSON.stringify(items));
  } catch (error) {
    onReject(error);
  }
}
