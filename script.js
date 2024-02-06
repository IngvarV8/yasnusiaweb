function drawButton() {
    var range = 100;
    var e = document.createElement("button");
    e.style = "background-color: yellow; width: 200px; height: 100px; position: relative;";
    e.classList.add("drawn-button");
    e.innerHTML = Math.round(Math.random()*range); 
    var container = document.getElementById("container");
    container.appendChild(e);
}

var homeImage = document.getElementById("home_img");
homeImage.addEventListener("mouseover", function () {
    //this.style = "box-shadow: 3px 3px 3px grey";
    //this.style = "background-color: red"
    this.classList.add("home_img_zoomed");
})

homeImage.addEventListener("mouseout", function () {
    this.classList.remove("home_img_zoomed");
})


document.createElement("button").innerHTML = "Newbtn";

var list = document.getElementById("list");
var button = document.getElementById("button");

button.addEventListener("mouseenter", function () {
    var unit = document.createElement("li");
    unit.innerHTML = "sample1";
    list.appendChild(unit);
});

function parseInput() {
    let el = document.getElementById("input");
    let inputValue = el.value;
    let container = document.getElementById("container");
    const myArray = [1, 2];
    var randomElement = getRandomNumberFromArray(myArray);
    randomElement = randomElement.toString();

    if (inputValue.toUpperCase() == "ПОКАЖИ НАС") {
        let newImg = document.createElement("img");
        newImg.src = "img/us" + randomElement + ".jpg";
        newImg.style = "height: 100px";
        container.appendChild(newImg);
        return;
    }

    let newPar = document.createElement("p");
    newPar.innerHTML = inputValue;

    container.appendChild(newPar);
}


function getRandomNumberFromArray(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function makeSmaller() {
    let img = document.getElementById("home_img");
    let width = img.style.getPropertyValue("width");
    //console.log(typeof width);
    width = parseInt(width, 10);
    //console.log(typeof width);
    //console.log(width);
    img.style.width = (width - 20) + "px";
}

function makeBigger() {
    let img = document.getElementById("home_img");
    let width = img.style.getPropertyValue("width");
    width = parseInt(width, 10);
    img.style.width = (width + 20) + "px";
}

var minigameSizeSetButton = document.getElementById("minigame_size_set_button");
minigameSizeSetButton.addEventListener("click", handleGameSize);

function handleGameSize() {
    if(document.getElementById("game_table") != null){
        clearTable();
    }

    let width = document.getElementById("minigame_input_width").value;
    let height = document.getElementById("minigame_input_height").value;
    width = parseInt(width);
    height = parseInt(height);

    //let table = document.getElementById("game_table");
    var minigame = document.getElementById("minigame");
    var table = document.createElement("table");
    table.classList.add("game-table");
    table.id = "game_table";
    minigame.appendChild(table);

    var trNew = null;
    for (let i = 0; i < height; i++) { 
        trNew = document.createElement("tr");
        table.appendChild(trNew);
        for (let j = 0; j < width; j++) {
            tdNew = document.createElement("td");
            tdNew.innerText = Math.random().toString().charAt(2);
            tdNew.classList.add("minigame-cell");
            trNew.appendChild(tdNew);
        }
    }
    var firstChildTd = document.getElementById("game_table").querySelector("td");
    //firstChildTd.classList.remove("minigame-cell");
    firstChildTd.classList.add("minigame-cell-current");
}

function acceptGuess(){
    //handleGameSize();
    let acceptPlayersGuess = document.getElementById("accept_players_guess");
    let cells = document.getElementById("game_table").querySelectorAll("td");
    console.log(cells);
    for(let x=0; x<cells.length; x++){
        if(cells[x].classList.contains("minigame-cell-current")){
            cells[x+1].classList.add("minigame-cell-current");
            cells[x].classList.remove("minigame-cell-current");
            if(cells[x].innerText == document.getElementById("accept_players_guess")){
               //parseInt(document.getElementById("scores").value)++;
            }
            break;
        }
    }
    //while()
    //if(acceptPlayersGuess.innerText == )
}

function generateScores(){
    let playersUi = document.getElementById("players_ui");
    var scores = document.createElement("a");
    scores.id = "scores";
    scores.innerText = "0-0";
    playersUi.appendChild(scores);
}

function generatePlayerNames(){
    let playersUi = document.getElementById("players_ui");
    while(playersUi.firstChild){
        playersUi.firstChild.remove();
    }

    var p = document.createElement("p");
    p.id = "players_ui_p";
    var player1 = document.getElementById("minigame_input_player1").value;
    var player2 = document.getElementById("minigame_input_player2").value;
    console.log(player1);
    p.innerText = player1 + " vs. " + player2;
    playersUi.appendChild(p);
    generateScores();
}

function resetGame(){
    if(document.getElementById("game_table") != null){
        clearTable();
    }
    handleGameSize();
}

function clearTable(){
    document.getElementById("game_table").remove();
}

