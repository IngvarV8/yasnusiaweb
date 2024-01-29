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
    this.style = "box-shadow: 3px 3px 3px grey";
    this.style = "background-color: red"
})

homeImage.addEventListener("mouseout", function(){
    this.style = "";
})

homeImage.addEventListener("scroll", function(){
    this.style = "background-color: red";
})


document.createElement("button").innerHTML = "Newbtn";

var list = document.getElementById("list");
var button = document.getElementById("button");

button.addEventListener("mouseenter", function(){
    var unit = document.createElement("li");
    unit.innerHTML = "sample1";
    list.appendChild(unit);
})

