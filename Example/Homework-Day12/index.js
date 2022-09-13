//Truy cập vào Parent Node chứa các element li cần phải xóa
const list = document.querySelector('#content-ul');
//delete books
list.addEventListener('click',function(event){
    if(event.target.id == 'delete'){ //tác động vào button nào có class là delete
        console.log(event.target);
         const ls = event.target.parentElement; //lấy ra element li
         ls.parentNode.removeChild(li); //xóa khỏi nội dung là ul
    }
})

//add book
// const forms = document.createElement('form');
// forms.id = 'add-book';
// const addbook = forms['add-book'];

// //bắt sự kiện onclick
// addbook.addEventListener('submit',function(event){
//     event.preventDefault();

// //create Element
// const value = addbook.querySelector('input[type="text"]').value;
// })
let addbook = {};
let buttonadd = document.getElementById('btn-add');
var data=[]

buttonadd.addEventListener('click',function(event){
    var inputValue = document.getElementById("add-book").value
    data.push(inputValue)
    function renderData(){
        var ulBooks = document.getElementById("content-ul")
            var htmls = data.map( function(item, index){
                return `   
                    <li>${item} <button onclick="deleteBooks(${index})">Delete</button></li>
            `
            } )
           
            ulBooks.innerHTML = htmls.join("")   
    }
    
    renderData()
    
})

function deleteBooks(index){
    data.splice(index, 1)
    console.log(data)
}

