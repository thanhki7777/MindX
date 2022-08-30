//DOM ELEMENT
//Find element by id
// let secondChildElm = document.getElementById('second-child');
// console.log('firstChildElm:',firstChildElm);

//Find element by class
// let childElm = document.getElementsByClassName('child');
// console.log('ChildElm:',childElm[0]);

//Find element by tag
// let pElm = document.getElementsByTagName('p');
// console.log('pElm:',pElm[0]);

//***Query selector
// let childElm = document.querySelectorAll('.child');
// console.log('childElm:',childElm[0]);

//------Dom Edit Element value (attribute,text,...)
//Edit text/innerHtml
// secondChildElm.innerHTML = "Three child"

//Edit attribute
// secondChildElm.style = 'background-color:green;';

//Edit style 
// secondChildElm.style.backgroundColor = 'violet';

//-----------DOM Create or remove Elêmnt
// const todoList = ['Homework','Shopping','Listening'];//API
// let ul = document.createElement('ul'); //tag:ul
// for(let i=0;i<todoList.length;i++){
//     let li = document.createElement("li"); //<li>Homework</li>
//     li.innerHTML = todoList[i];
//     //Add element
//     ul.appendChild(li);
// }

// document.body.appendChild(ul);

// //Remove 
// ul.removeChild(document.getElementsByTagName("li")[1]);

// const brandCar = ['Volvo','Toyota','BMW'];
// let ol = document.createElement('ol');
// for (let i=0;i<brandCar;i++){
//     let li = document.createElement('li');
//     li.innerHTML = brandCar[i];
//     ol.appendChild(li);
// }

// document.body.appendChild(ol);

let button = document.createElement("button");
button.innerHTML = "Like";
button.id="button";
button.style = "background-color:green;";
document.body.appendChild(button);
function change(){
    
    if(button.innerHTML === "Like"){
        button.innerHTML = "liked";
        button.style.backgroundColor = "blue";
    }
    else if( button.innerHTML === "liked"){
        button.innerHTML = "Like";
        button.style.backgroundColor = "green";
    }
    return false;
}
button.onclick = change;