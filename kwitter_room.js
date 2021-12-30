//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBrh5i4d57Mibm1C0WevGhYAMxO7T-Hpwg",
    authDomain: "kwitter-558a0.firebaseapp.com",
    databaseURL: "https://kwitter-558a0-default-rtdb.firebaseio.com",
    projectId: "kwitter-558a0",
    storageBucket: "kwitter-558a0.appspot.com",
    messagingSenderId: "864742407183",
    appId: "1:864742407183:web:93d99626ba599e29e2b77a"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function getData() 
    { firebase.database().ref("/").on('value', function(snapshot) 
    { document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; 
    console.log("Room Name - " + Room_names); 
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
     }); }); }
getData();

function redirecttoroom(name)
{
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

