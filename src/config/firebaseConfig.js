import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA7Tix3j3ZOOpLXxnvUtalZ17oxRegKJ3s',
  authDomain: 'cleanupplanet-9aadd.firebaseapp.com',
  databaseURL: 'https://cleanupplanet-9aadd.firebaseio.com',
  projectId: 'cleanupplanet-9aadd',
  storageBucket: 'cleanupplanet-9aadd.appspot.com',
  messagingSenderId: '1081280072958'
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
