document.addEventListener("DOMContentLoaded", function(){


//create button
let button = document.createElement("button");
let btnText = document.createTextNode("Add Square");
button.appendChild(btnText);
document.body.appendChild(button);
button.style.display = "block"

//create button counter
let count = 0

//create black squares for each click/increment id number with each click
button.addEventListener("click", function(){
    count++;
    let square = document.createElement("div");
    square.className = "square"
    square.id = count;
    document.body.appendChild(square);
    square.style.display = "inline-block";
    square.style.backgroundColor = "black";
    square.style.width = "100px";
    square.style.height = "100px"
   

//creating id to appear over hover
    let text = document.createElement("div");
    let squareText = document.createTextNode(count);
    text.appendChild(squareText);
    square.appendChild(text);

    square.addEventListener("mouseover", hover);
    function hover() {
        text.style.opacity = "1"
        text.style.color = "white"
        text.style.fontSize = "3em"
        text.style.textAlign = "center"
    }

    square.addEventListener("mouseleave", noHover);
    function noHover() {
        text.style.opacity="0"
    }

//when a square is clicked - random color
    let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'black'];

    function getRandomColor () {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        return randomColor;
    }
 square.addEventListener("click", function(){
    let randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
 })   

 //when a square is double clicked - check if even/odd, remove sibling
 square.addEventListener("dblclick", function(){

    if (square.id % 2 === 0) {
        if  (square.nextSibling === null){
            alert("NO SQUARE NEXT TO YOU!")
        }else {
            this.nextSibling.remove();
        }
    }
    else if (square.id % 2 !== 0){
        if (square.previousSibling === null){
            alert("NO SQUARE BEHIND YOU!");
        } else {
            this.previousSibling.remove();
        }
    }
 })
   
})

});