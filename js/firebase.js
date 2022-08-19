import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCalg2jfq4g2PsuDNQFSSmQu-noGg7MUp8",
    authDomain: "contact-f0737.firebaseapp.com",
    databaseURL: "https://contact-f0737-default-rtdb.firebaseio.com",
    projectId: "contact-f0737",
    storageBucket: "contact-f0737.appspot.com",
    messagingSenderId: "213335270996",
    appId: "1:213335270996:web:e79e20b8f692ca56736fc1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  function sendMessage(name, email, message){
    set(ref(db, 'message/'+name),{
        name:name,
        email:email,
        message:message
    });
  }

  function submitForm(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("emailid").value;
    let message = document.getElementById("msgContent").value;

    sendMessage(name, email,message)
  }

export { submitForm }
  