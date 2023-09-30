import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAxv0OJoR7hpj-y5u9ai0Mc5xsupvvjOHo',
  authDomain: 'relax-ecommerce.firebaseapp.com',
  projectId: 'relax-ecommerce',
  storageBucket: 'relax-ecommerce.appspot.com',
  messagingSenderId: '1030652325590',
  appId: '1:1030652325590:web:39bdf2e6f6babbc352a377'
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
// export const auth = getAuth(app);