function GetRecipe() {
  let name = prompt("What is your name?").toLowerCase();
  let email = prompt("What is your email address?").toLowerCase();
  if (email) {
    alert(
      "Thank you," +
        name +
        "! The recipe has been sent to you by email! Enjoy your baking!👩‍🍳 😄 "
    );
  } else {
    alert("Sorry, no email means no recipe!");
  }
}
let ContactButton = document.querySelector("button");
ContactButton.addEventListener("click", GetRecipe);
