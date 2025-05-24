let cnt = 0;
let c; // Declare `c` outside to make it accessible in the toggle function
let x
// Store the initial background color of the element using computed style


let start = 0;

function toggle() {
  let x = document.getElementById("barsha");
  cnt = 1 - cnt;
  
  if (cnt == 1) {
    x.style.backgroundColor = "purple"; // Change to purple
  } else {
    x.style.backgroundColor = c; // Revert to original color
  }
}

function buddi()
{
     x = document.getElementById("barsha");
c = x.style.backgroundColor 
setInterval(toggle(),1000);
}
