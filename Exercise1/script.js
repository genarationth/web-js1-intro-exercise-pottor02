function ChangeName() {
  let text;
  let person = prompt("Please enter your name:", "Insert name here!");
  if (person == null || person == "") {
    text = "Please fill your NAME";
  } else {
    text = "OMG " + person + "! How are you today?";
  }
  document.getElementById("name").innerHTML = text;
}


function FirstName() {
  let textnew;
  let personnew = prompt("Please enter your name:","InsertNamePleaseeeeee");
  if (personnew == null || personnew == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Aloha " + personnew + "! How are you today?";
  }
  document.getElementById("namenew").innerHTML = textnew;
}