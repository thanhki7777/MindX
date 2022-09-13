// const changeTextbtn = document.getElementById('changeTextbtn');
// const p = document.getElementById('myP');
// const div = document.getElementById('myDiv');
// const myForm = document.getElementsByTagName('myForm')[0];
// function showClicked(){
//     alert('clicked');
// }
// function changeText(){
//     const p =document.getElementsByTagName('p')[0];//0 is index
//     p.innerHTML = "Fuck You";
//     p.style.color = 'skyblue';
// }
// //changeTextbtn.onclick = changeText();
// changeTextbtn.addEventListener('click',changeText);
// changeTextbtn.addEventListener('click',function(){
//     console.log('Another event');
// })

// //Event buddling >< Event capturing
// div.addEventListener('click',function(){
//     alert('div clicked');
// })
// p.addEventListener('click',function(){
//     alert('p clicked');
// })

// myForm.addEventListener("submit",function(event){{
//     console.log(event.target.value);
//     //get value from inputs
//     //format data
//     //call API - post 
// }})

const but = document.getElementById('change-my-life');
const p = document.getElementsByTagName('p')[0];
function changeText(){
    p.innerHTML = "Tao giàu";
    p.style.color = 'violet'
}
but.addEventListener('click',changeText);

const nope = document.getElementById('nope');
// function changeBrgColor(){
//     nope.style.backgroundColor = '#ff0000';
//     nope.style.color = '#ffffff';
//     nope.onmouseout = function(){
//         nope.style.backgroundColor = '';
//         nope.style.color = 'black';
//         nope.innerHTML = "Nope";
//     }
// }

nope.addEventListener('click',changeBrgColor);