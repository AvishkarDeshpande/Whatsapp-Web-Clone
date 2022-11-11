import firebase from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyBJnN0uGW9czzxToBiAoB-H5Hvl4T8ekes",
  authDomain: "whats-app-clone-1234.firebaseapp.com",
  projectId: "whats-app-clone-1234",
  storageBucket: "whats-app-clone-1234.appspot.com",
  messagingSenderId: "203578722800",
  appId: "1:203578722800:web`:d3154611256fc591083535",
  measurementId: "G-9MQB3M68DX"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;