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

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("aloo");

document.getElementById("aloo").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
console.log("Hello!");
  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("aloo").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};