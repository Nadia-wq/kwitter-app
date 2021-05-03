var firebaseConfig = {
      apiKey: "AIzaSyDip6n-7b_RX_lZredUYWdOd-gJj1ZeyLA",
      authDomain: "kwitter-3216c.firebaseapp.com",
      databaseURL: "https://kwitter-3216c-default-rtdb.firebaseio.com",
      projectId: "kwitter-3216c",
      storageBucket: "kwitter-3216c.appspot.com",
      messagingSenderId: "752431021769",
      appId: "1:752431021769:web:2beddfa6886ed322311718"
};
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
// Initialize Firebase
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name-" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;


                  //End code
            });
      });
}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
