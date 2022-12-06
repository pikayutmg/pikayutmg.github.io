function Login(){
var done=0;
var username=document.login.username.value;
var password=document.login.password.value;

if (username=="Enes" && password=="2009") {
window.location="user1.html";
}



if (username=="vous" && password=="vous") { 
// Vous pouvez réservez une page pour vous même(options, etc.)
window.location="vous.html";
}
}