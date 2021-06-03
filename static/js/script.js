// Your Age In Days

function ageInDays() {
  let elementExists = document.getElementById("ageInDays");
  if (elementExists) {
    reset();
  }
  let dateobj = new Date();
  let dateObject = dateobj.getFullYear();
  let birthYear = prompt("What Year Were You Born...");
  if (birthYear > dateObject) {
    ageInDays();
  } else {
    let resultInDays = (dateObject - birthYear) * 365;
    let h1 = document.createElement("h1");
    let textAnswer = document.createTextNode(
      `You are ${resultInDays} days old!`
    );
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("result-1").appendChild(h1);
  }
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// Random Dog Generator

document.getElementById("dog-generator").addEventListener(
  "click",
  function () {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((myContent) => {
        let image = document.createElement("img");
        let div = document.getElementById("flex-dog-gen");
        image.src = myContent["message"];
        div.appendChild(image);
      });
  },
  false
);

// Rock Paper Scissors

function game(yourChoice){
    let humanChoice , botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomToRps());
    let results = decideWinner(humanChoice , botChoice);
    let message = finalMessage(results); // {'message : 'You Won! , color : 'green'}
    console.log(message);
    rpsFrontEnd(humanChoice , botChoice , message);
}

const randomToRps = () =>{
    return Math.floor(Math.random() * 3);
}

const numberToChoice = (number) => {
    return ['rock' , 'paper' , 'scissors'][number];
}

const decideWinner = (yourChoice , botChoice) => {
    let rpsDatabase = {
        'rock': {'scissors' : 1 , 'rock' : 0.5 , 'paper' : 0},
        'paper': {'rock' : 1 , 'paper' : 0.5 , 'scissors' : 0},
        'scissors': {'paper' : 1 , 'scissors' : 0.5 , 'rock' : 0},
    }
    let yourScore = rpsDatabase[yourChoice][botChoice];
    let botScore = rpsDatabase[botChoice][yourChoice];

    return [yourScore , botScore];
}

function finalMessage([yourScore, botScore]){
    if(yourScore === 0){
        return {'message': 'You lost!' , 'color' : 'red'}
    }
    else if(yourScore === 0.5){
        return {'message': 'Tied' , 'color' : 'yellow'}
    }
    else{
        return {'message' : 'You won!' , 'color' : 'green'}
    }
}

const rpsFrontEnd = (humanImageChoice , botImageChoice , finalMessage) => {
    let imagesDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src,
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');
    
    humanDiv.innerHTML = `<img src = '${imagesDatabase[humanImageChoice]}' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgb(99, 185, 53)'>`
    messageDiv.innerHTML = `<h1 style = 'color:${finalMessage['color']}; font-size : 60px; padding: 30px;'> ${finalMessage['message']} </h1>`
    botDiv.innerHTML = `<img src = '${imagesDatabase[botImageChoice]}' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgb(243, 38, 24)'>`
    
    
    
    document.getElementById('flex-container-3').appendChild(humanDiv);
    document.getElementById('flex-container-3').appendChild(messageDiv);
    document.getElementById('flex-container-3').appendChild(botDiv);
    

}


// Change Colors

let all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);


let copyAllButtons = [];
for(let i = 0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons)


const buttonColorChange = (buttonThing) =>{
    if(buttonThing.value === 'red'){
        buttonRed();
    }
    else if(buttonThing.value === 'green'){
        buttonGreen();
    }
    else if(buttonThing.value === 'reset'){
        buttonReset();
    }
    else if(buttonThing.value === 'random'){
        buttonRandom();
    }
}

const buttonRed = () => {
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger')
    }
}

const buttonGreen = () => {
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success')
    }
} 

const buttonReset = () => {
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

const buttonRandom = () => {
    let choices = ['btn-primary' , 'btn-success' , 'btn-danger' , 'btn-warning']
    
    for(let i = 0; i < all_buttons.length; i++){
        let randomNumber = Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }

}