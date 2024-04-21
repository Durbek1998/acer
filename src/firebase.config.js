// import { initializeApp } from "firebase/app";
// import { getauth } from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyDW9iavJJIsCmiTQrrx4PwJ2fxkZKSuEcQ",
//   authDomain: "maltimart-47f22.firebaseapp.com",
//   projectId: "maltimart-47f22",
//   storageBucket: "maltimart-47f22.appspot.com",
//   messagingSenderId: "202116950865",
//   appId: "1:202116950865:web:85d0e7460bad265b330170"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getauth(app);

// export default app;


 
// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
// import {getFirestone} from 'firebase/firestore'
// import {getStorage} from 'firebase/storage'

// const firebaseConfig = {
//   apiKey: "AIzaSyDW9iavJJIsCmiTQrrx4PwJ2fxkZKSuEcQ",
//   authDomain: "maltimart-47f22.firebaseapp.com",
//   projectId:  "maltimart-47f22",
//   storageBucket:  "maltimart-47f22.appspot.com",
//   messagingSenderId: "202116950865",
//   appId: "1:202116950865:web:85d0e7460bad265b330170"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);

// export default app;








import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyDW9iavJJIsCmiTQrrx4PwJ2fxkZKSuEcQ",
  authDomain: "maltimart-47f22.firebaseapp.com",
  projectId:  "maltimart-47f22",
  storageBucket:  "maltimart-47f22.appspot.com",
  messagingSenderId: "202116950865",
  appId: "1:202116950865:web:85d0e7460bad265b330170"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;