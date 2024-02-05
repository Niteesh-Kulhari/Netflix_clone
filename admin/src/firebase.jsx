
import{initializeApp} from "firebase/app"
import {getStorage, ref, getDownloadURL, uploadBytesResumable} from "firebase/app"


const firebaseConfig = {
    apiKey: "AIzaSyCP96fZm5z6N1_TZ773TOciZQ3WpGtvjmw",
    authDomain: "netflix-bd433.firebaseapp.com",
    projectId: "netflix-bd433",
    storageBucket: "netflix-bd433.appspot.com",
    messagingSenderId: "205388863668",
    appId: "1:205388863668:web:ae37fd979b61c973b51fe1",
    measurementId: "G-NTFJWRHSED"
  };


  initializeApp(firebaseConfig);
  const storage = getStorage();

  export default storage;