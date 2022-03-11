import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBLxBcKb_kefnxs1jb9slmGDZxs3WikwxI",
  authDomain: "tcc-brain.firebaseapp.com",
  projectId: "tcc-brain",
  storageBucket: "tcc-brain.appspot.com",
  messagingSenderId: "949797254717",
  appId: "1:949797254717:web:93cea58622d780510c1c54"
};

firebase.initializeApp(firebaseConfig)

export default firebase