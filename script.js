let userName = prompt("Who's there?");

if(userName == "Admin") {
  let password = prompt("And what is the magic word?");
  if(password == "TheMaster") {
    alert(`Welcome ${userName}!`);
  }
  else if(password == '' || password == null) {
    alert('Cancelled');
  }
  else{
    alert('Wrong password');
  }
}
else if(userName == '' || userName == null) {
  alert('Cancelled');
}
else{
  alert("I don't know you");
}