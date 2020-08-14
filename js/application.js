const createMessage = (answer) => {
  if (answer=="a") {
    return 'Vous aimez être le boss' 
  }
    
  else if(answer=="b") {
    return 'Je vous conseil un lit king size'
  }
  else if(answer=="c") {
    return "Le savoir c'est le pouvoir! ou pas"
  }
  else if(answer=="d") {
    return "No comment"
  }
}

let form = document.getElementById("my-form");
console.log(form);

const message = document.getElementById("ia-message");
const counter = document.getElementById("counter");
let count = 0;

form.addEventListener("submit", (event) => {
  const input = form.querySelector("#user-answer");
  answer = input.value
  message.innerHTML = createMessage(answer);
  count = count += 1
  counter.innerHTML = count;
});
