// let button = document.getElementById("btn");
// let color = document.body.style.backgroundColor;
// function changeColor(){
//    switch(color){
//     case 1:
//         color = 'violet';
//         break;
//     case 2:
//         color = 'black';
//         break;  
//     case 3:
//         color = 'yello';
//         break;
//     case 4:
//         color = 'blue';
//         break;
//     case 5:
//         color = 'gray';
//         break; 
//    }
//    for(let i = 1;i<=color;i++){
//     if(color === 'white'){
//         color = color[i];
        
//     }
// }
// }
//Bài 1
let button = document.createElement('button');
button.id = 'btn';
button.style.backgroundColor = 'white';
button.style.color = 'black';
button.innerHTML = 'Change Color';
button.style.width = '200px';
button.style.height = '100px';
button.style.fontSize = '40px';
button.style.textAlign = 'center';
button.style.marginLeft= '500px';
button.style.marginTop = '200px';
document.body.appendChild(button);

// const listColor = [ 'red', 'blue', 'green', 'yellow', 'black', 'white', 'orange', 'violet', 'pink', 'purple', 'brown', 'grey']
// let index = 0;
// function change() {
    
//     document.body.style.backgroundColor = listColor[index]
//     if (index >= listColor.length - 1) {
//         index = 0;
//     }
//     else {
//         index = index + 1
//     }
//     return false

 
// }
// button.onclick = change


//Bài 2:
// let btn = document.createElement('button');
// btn.id = 'btn';
// let i = 0;
// btn.innerHTML =`${i}`;
// btn.style.backgroundColor = 'white';
// btn.style.color = 'black';
// btn.style.width = '96px';
// btn.style.height = '48px';
// btn.style.fontSize = '24px';
// document.body.appendChild(btn);
// function addBut(){
//    btn.innerHTML = `${i+1}`;
//    i++;
// }
// btn.onclick = addBut

let color_list = ['red','white','blue','green','violet','yellow','orange','skyblue'];
let brgcolor = document.querySelector("body")

function changeColor(){
   var index = Math.floor(Math.random() *color_list.length)
   brgcolor.style.backgroundColor = color_list[index]
}
button.onclick=changeColor
