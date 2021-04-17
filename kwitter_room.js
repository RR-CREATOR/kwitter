
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
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}