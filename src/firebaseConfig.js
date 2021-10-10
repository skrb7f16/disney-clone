import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC1-Qc5uISebxsgPbWEJco1hqk4UUPiaY8",
  authDomain: "disney-clone-77fa9.firebaseapp.com",
  projectId: "disney-clone-77fa9",
  storageBucket: "disney-clone-77fa9.appspot.com",
  messagingSenderId: "477751848216",
  appId: "1:477751848216:web:42e8eedf51fe31b65e426d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database("https://disney-clone-77fa9-default-rtdb.firebaseio.com/");
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
