// แบบใช้ if else
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



// แบบไม่ใช้ if else 
function FirstName() {
  // let textnew;
  let personnew = prompt("Please enter your name:","InsertNamePleaseeeeee");
  // if (personnew == null || personnew == "") {
  //   textnew = "User cancelled the prompt.";
  // } else {
  //   textnew = "Aloha " + personnew + "! How are you today?";
  // }
  document.getElementById("personnew").innerHTML = `hellllo ${personnew}`;
}