import firebase  from "firebase";
import 'firebase/auth' ;
import 'firebase/firestore';
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDYSAl3PqNk9J-fkmSLkKz6zxlcW1IdjrA",
    authDomain: "olxx-f1617.firebaseapp.com",
    projectId: "olxx-f1617",
    storageBucket: "olxx-f1617.appspot.com",
    messagingSenderId: "763361954511",
    appId: "1:763361954511:web:f9dabf268f484ec85e85ba",
    measurementId: "G-VKBT9823QD"
  };
export default firebase.initializeApp(firebaseConfig)
