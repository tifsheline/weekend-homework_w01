var box1 = document.getElementById("box1");

box1.addEventListener("click", function(){
box1.style.backgroundColor="#0D39FF"; document.getElementById("box1").innerHTML="X"; box1.style.color="white"; box1.style.textAlign="center"; box1.style.fontSize="100px"});

var box2 = document.getElementById("box2");

box2.addEventListener("click", function(){
box2.style.backgroundColor="#1BFFF8"; document.getElementById("box2").innerHTML="O"; box2.style.color="white"; box2.style.textAlign="center"; box2.style.fontSize="100px"});

var box3 = document.getElementById("box3");

box3.addEventListener("click", function(){
box3.style.backgroundColor="#0D39FF"; document.getElementById("box3").innerHTML= "O"; box3.style.color="white"; box3.style.textAlign="center"; box3.style.fontSize="100px"});

var box4 = document.getElementById("box4");

box4.addEventListener("click", function(){
box4.style.backgroundColor="#1BFFF8"; document.getElementById("box4").innerHTML="O"; box4.style.color="white"; box4.style.textAlign="center"; box4.style.fontSize="100px"});

var box5 = document.getElementById("box5");

box5.addEventListener("click", function(){
box5.style.backgroundColor="#0D39FF"; document.getElementById("box5").innerHTML="X"; box5.style.color="white"; box5.style.textAlign="center"; box5.style.fontSize="100px"});

var box6 = document.getElementById("box6");

box6.addEventListener("click", function(){
box6.style.backgroundColor="#1BFFF8"; document.getElementById("box6").innerHTML="O"; box6.style.color="white"; box6.style.textAlign="center"; box6.style.fontSize="100px"});

var box7 = document.getElementById("box7");

box7.addEventListener("click", function(){
box7.style.backgroundColor="#0D39FF"; document.getElementById("box7").innerHTML="O"; box7.style.color="white"; box7.style.textAlign="center"; box7.style.fontSize="100px"});

var box8 = document.getElementById("box8");

box8.addEventListener("click", function(){
box8.style.backgroundColor="#1BFFF8"; document.getElementById("box8").innerHTML="O"; box8.style.color="white"; box8.style.textAlign="center"; box8.style.fontSize="100px"});

var box9 = document.getElementById("box9");

box9.addEventListener("click", function(){
box9.style.backgroundColor="#0D39FF"; document.getElementById("box9").innerHTML="X"; box9.style.color="white"; box9.style.textAlign="center"; box9.style.fontSize="100px"});

 function getWinner(box1, box5, box9) {
  var winnerIs = [];

  winnerIs[0] = 'box1';
  winnerIs[1] = 'box5';
  winnerIs[2] = 'box9';

  var output = winnerIs.join()
  console.log(output)
}
var winnerIsX = document.getElementById('box1'&&'box5'&&'box9')
winnerIsX.addEventListener('click', function() {
   console.log("Tic-Tac-Toe!");
})


function reset(box1, box2, box3, box4, box5, box6, box7, box8, box9) {
  var clearBoard = [];

  clearBoard[0] = box1;
  clearBoard[1] = box2;
  clearBoard[2] = box3;
  clearBoard[3] = box4;
  clearBoard[4] = box5;
  clearBoard[5] = box6;
  clearBoard[6] = box7;
  clearBoard[7] = box8;
  clearBoard[8] = box9;

  var output = clearBoard.join()
  console.log(output)
}
var resetBtn = document.getElementById('reset-btn')
resetBtn.addEventListener('click', function() {
  box1.style.backgroundColor="white";box2.style.backgroundColor="white";box3.style.backgroundColor="white";box4.style.backgroundColor="white";box5.style.backgroundColor="white";box6.style.backgroundColor="white";box7.style.backgroundColor="white";box8.style.backgroundColor="white";box9.style.backgroundColor="white";
})
