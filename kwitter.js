var firebaseConfig = {
    apiKey: "AIzaSyCpUPUXUT1VSxakRunFIEseVo3_DyeT8X8",
    authDomain: "classtest-6b044.firebaseapp.com",
    databaseURL: "https://classtest-6b044-default-rtdb.firebaseio.com",
    projectId: "classtest-6b044",
    storageBucket: "classtest-6b044.appspot.com",
    messagingSenderId: "113708354409",
    appId: "1:113708354409:web:a04e3270286869784f4bf8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
    document.getElementById("user_name").value = "";
}