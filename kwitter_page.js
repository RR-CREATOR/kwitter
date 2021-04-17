user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

var firebaseConfig = {
      apiKey: "AIzaSyCpUPUXUT1VSxakRunFIEseVo3_DyeT8X8",
      authDomain: "classtest-6b044.firebaseapp.com",
      databaseURL: "https://classtest-6b044-default-rtdb.firebaseio.com",
      projectId: "classtest-6b044",
      storageBucket: "classtest-6b044.appspot.com",
      messagingSenderId: "113708354409",
      appId: "1:113708354409:web:a04e3270286869784f4bf8"
    };

    firebase.initializeApp(firebaseConfig);

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });

          document.getElementById("msg").value = "";
    }

    function logout(){
         localStorage.removeItem("room_name");
         localStorage.removeItem("user_name");
         window.location = "index.html"; 
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
