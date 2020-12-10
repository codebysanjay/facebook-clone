import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCFgoY-eAslCbCoV51gKRbeBNUJcy27maE",
    authDomain: "facebook-clone-6bb68.firebaseapp.com",
    databaseURL: "https://facebook-clone-6bb68.firebaseio.com",
    projectId: "facebook-clone-6bb68",
    storageBucket: "facebook-clone-6bb68.appspot.com",
    messagingSenderId: "611495123895",
    appId: "1:611495123895:web:d1388ad2c4f955dd9fa632",
    measurementId: "G-R31Z3BX1TF"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;