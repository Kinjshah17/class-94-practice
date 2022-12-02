
// ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfL4joFpPENQnwh4gjxF3kmMT2CmoilO4",
  authDomain: "kwitter-p-3d4cf.firebaseapp.com",
  projectId: "kwitter-p-3d4cf",
  storageBucket: "kwitter-p-3d4cf.appspot.com",
  messagingSenderId: "826169275659",
  appId: "1:826169275659:web:9c01eddb6be5252a669e0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


