function ChangeName01() {
  let text;
  let person = prompt("Please enter your name:", "Insert name here!!!!!!!!!!!!!!!!");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  document.getElementById("name").innerHTML = text;
}


function ChangeName02() {
  let text;
  let person = prompt("Please enter your name:", "Insert name here!!!!!!!!!!!!!!!!");
  document.getElementById("name02").innerHTML = text;
}