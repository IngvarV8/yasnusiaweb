var text = "sample text";


//document.write(text.length);
//document.write(text.toUpperCase());

//alert("alert msg");
//document.write("<h2 style='color:blue'>Header Two</h2>")

//var v = window.prompt("Tell: ");

var h = document.getElementById("head1");
//h.style.style = "css/style.css";
h.classList.add("sample2")

function handleClick(){
    alert("You clicked!");
}

var homeImage = document.getElementById("home_img");
homeImage.addEventListener("mouseover", function(){
    //this.style = "box-shadow: 3px 3px 3px grey";
    //this.style = "background-color: red"
    this.classList.add("home_img_zoomed");
})

homeImage.addEventListener("mouseout", function(){
    this.classList.remove("home_img_zoomed");
})


document.createElement("button").innerHTML = "Newbtn";

var list = document.getElementById("list");
var button = document.getElementById("button");

button.addEventListener("mouseenter", function(){
    var unit = document.createElement("li");
    unit.innerHTML = "sample1";
    list.appendChild(unit);
});

function parseInput(){
    let el = document.getElementById("input");
    let inputValue = el.value;
    let container = document.getElementById("container");
    const myArray = [1, 2];
    var randomElement = getRandomNumberFromArray(myArray);
    randomElement = randomElement.toString();

    if (inputValue.toUpperCase() == "ПОКАЖИ НАС"){
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

function makeSmaller(){
    let img = document.getElementById("home_img");
    let width = img.style.getPropertyValue("width");
    //console.log(typeof width);
    width = parseInt(width, 10);
    //console.log(typeof width);
    //console.log(width);
    img.style.width = (width - 20) + "px";
}

function makeBigger(){
    let img = document.getElementById("home_img");
    let width = img.style.getPropertyValue("width");
    width = parseInt(width, 10);
    img.style.width = (width + 20) + "px";
}
