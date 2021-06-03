// Your Age In Days

function ageInDays(){
    var elementExists = document.getElementById("ageInDays");
    if(elementExists){
        reset();
    }
    var dateobj = new Date();
    var dateObject = dateobj.getFullYear();
    var birthYear = prompt('What Year Were You Born...');
    if(birthYear > dateObject){
        ageInDays();
    }
    else{
        var resultInDays = (dateObject - birthYear)*365;
        var h1 = document.createElement('h1');
        var textAnswer = document.createTextNode(`You are ${resultInDays} days old!`)
        h1.setAttribute('id' , 'ageInDays');
        h1.appendChild(textAnswer);
        document.getElementById('result-1').appendChild(h1);
    }
    
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// Random Dog Generator