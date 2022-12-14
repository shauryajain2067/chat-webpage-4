const firebaseConfig = {
  apiKey: "AIzaSyBZz79_GPgXCz4fURpbwr2wBtbT9nvxMj8",
  authDomain: "chat-fd364.firebaseapp.com",
  projectId: "chat-fd364",
  storageBucket: "chat-fd364.appspot.com",
  messagingSenderId: "626383193500",
  appId: "1:626383193500:web:127fd26c2f12eaf4bfb459",
  measurementId: "G-XS97G9895C"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

var user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="WELCOME " + user_name + "!!";

function addRoom(){
  var room_name=document.getElementById("room_name").value;
firebase.database.ref("/").child(room_name).update({
  purpose : "adding a new room"
});
localStorage.setItem("room_name",room_name);
window.location="chat_page.html";
}



function getData() {
  firebase.database().ref("/").on('value',

function(snapshot) {
  document.getElementById("output").innerHTML ="";
snapshot.forEach(function(childSnapshot) 
{childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)' >#"+Room_name+"</div><hr>";
window.location("chat_room.html");
//End code
});
});
}
getData();

