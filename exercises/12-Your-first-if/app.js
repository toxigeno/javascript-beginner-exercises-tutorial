var total = prompt('How many km are left to go?');

// Your code below:

  if (total >= 100) {
     alert = "Are we there yet?";
  } 
 else if (total > 50){
    alert = "We'll be there in 5 minutes";
  }
  if (total <= 50){
    alert = "I'm parking, I see you right now";
  }

console.log(alert);