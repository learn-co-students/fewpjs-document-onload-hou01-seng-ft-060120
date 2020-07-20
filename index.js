// Your code goes here
document.addEventListener("DOMContentLoaded", function(event) {
    changeText();

    function changeText() {
    let body = document.querySelector("body")
      let newP = document.getElementById("text")
      newP.innerHTML = "This is really cool!"
      body.appendChild("newP")
    }
  });