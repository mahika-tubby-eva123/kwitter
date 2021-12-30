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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name + "<img class = 'user_tick' src = 'tick.png'> </h4>";
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
like_button = "<button onclick = 'updatelike(this.id)' class = 'btn btn-warning' id = "+firebase_message_id+" value = "+like+">";
span = "<span class = 'glyphicon glyphicon-thumbs-up'>Like :"+ like +"</span> </button> <hr>";
row = name_with_tag + message_with_tag + like_button + span;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updatelike(message_id)
{
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes)+ 1;
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}