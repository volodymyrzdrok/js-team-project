import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, get, remove } from 'firebase/database';
import { firebaseConfig } from '../firebase-config';

const app = initializeApp(firebaseConfig);
const db = getDatabase();

// экспорт методов работы с данными

export const getData = (endPoint = 'task', userId = '') => {
  const url = userId ? `${userId}/${endPoint}` : endPoint;
  return get(ref(db, url))
    .then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        return normalizeData(data);
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
};

export const sendData = (endPoint = 'task', data = {}, userId = '') => {
  const url = userId ? `${userId}/${endPoint}` : endPoint;
  try {
    push(ref(db, url), data);
  } catch (error) {
    console.log('error :>> ', error);
  }
};

export const deleteItem = (endPoint = 'task', id = '', userId = '') => {
  const url = userId ? `${userId}/${endPoint}/${id}` : `${endPoint}/${id}`;
  try {
    remove(ref(db, url));
  } catch (error) {
    console.log('error :> ', error);
  }
};

const normalizeData = fbData => {
  return Object.entries(fbData).map(([key, value]) => {
    return { id: key, ...value };
  });
};
