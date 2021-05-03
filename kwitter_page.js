var firebaseConfig = {
      apiKey: "AIzaSyDip6n-7b_RX_lZredUYWdOd-gJj1ZeyLA",
      authDomain: "kwitter-3216c.firebaseapp.com",
      databaseURL: "https://kwitter-3216c-default-rtdb.firebaseio.com",
      projectId: "kwitter-3216c",
      storageBucket: "kwitter-3216c.appspot.com",
      messagingSenderId: "752431021769",
      appId: "1:752431021769:web:2beddfa6886ed322311718"
};

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,like:0
      });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+" <img class='user_tick' src='tick.png'></h4>";
msg_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-danger' id="+firebase_message_id+ "value="+like+"onclick='update_like(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> like:"+like+"</span> </button> <hr>";
row=name_with_tag+msg_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
function update_like (message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
}
firebase.database().ref(room_name).chile(message_id).update({
      like:updated_likes
});

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}