

let buttons = document.getElementsByClassName("btn");
let changeMe = document.getElementById("changeMe")

//Run through a Loop
//Add an event listener

for(let i = 0; i <buttons.length; i++){
    buttons[i].addEventListener('click', function(e){
        alert("You clicked on " + e.target.innerText);
        changingText(e.target.innerText);
    });
}

function changingText(textToChange){
    changeMe.innerText = textToChange;
    changeMe.classList = "";
    switch(textToChange)
    {
        case "Primary":
            changeMe.classList.add("blue");
            break;
        case "Secondary":
            changeMe.classList.add("grey");
            break;
        case "Info":
            changeMe.classList.add("teal");
            break;
        case "Warning":
            changeMe.classList.add("yellow");
            break;
        case "Danger":
            changeMe.classList.add("red");
            break;
        case "Light":
            changeMe.classList.add("light");
            break;
        case "Dark":
            changeMe.classList.add("dark");
            break;
        case "Success":
            changeMe.classList.add("green");
            break;
        default:
            changeMe.classList.add("dark");
            break;
    }
}