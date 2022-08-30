// function anorHien(){
//     let s1 = document.getElementById('show_search_advance');
//     let cate = document.getElementById('search_advance');
//     if(s1.innerHTML == 'Tìm kiếm nâng cao'){
//         s1.innerHTML = 'Bỏ tìm kiếm nâng cao';
//         category.style.display = 'table-row';
//     }
//     else{
//         s1.innerHTML = 'Tìm kiếm nâng cao';
//         category.style.display = 'none';
//     }
//     return false;
// }
let a_class = document.getElementsByClassName("show");
function helloWorld(){
      for(let i=0;i<a_class.length;i++){
        a_class[i].onclick = function(){
            alert('Hello');

            return false;
        };
      }
}