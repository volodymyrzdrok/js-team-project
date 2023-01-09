import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, get, remove } from 'firebase/database';
import { firebaseConfig } from '../firebase-config';

const app = initializeApp(firebaseConfig);
const db = getDatabase();

// экспорт методов работы с данными

export const getData = (endPoint = 'task') => {
  return get(ref(db, endPoint))
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

export const sendData = (data = {}, endPoint = 'task') => {
  try {
    push(ref(db, endPoint), data);
  } catch (error) {
    console.log('error :>> ', error);
  }
};

export const deleteItem = (endPoint, id) => {
  try {
    remove(ref(db, endPoint + '/' + id));
  } catch (error) {
    console.log('error :> ', error);
  }
};

const normalizeData = fbData => {
  return Object.entries(fbData).map(([key, value]) => {
    return { id: key, ...value };
  });
};
