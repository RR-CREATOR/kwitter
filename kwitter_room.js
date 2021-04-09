
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyCpUPUXUT1VSxakRunFIEseVo3_DyeT8X8",
      authDomain: "classtest-6b044.firebaseapp.com",
      projectId: "classtest-6b044",
      storageBucket: "classtest-6b044.appspot.com",
      messagingSenderId: "113708354409",
      appId: "1:113708354409:web:a04e3270286869784f4bf8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
