// //Bài1
// let a=10,b=15;
// //kiểm tra a>b không
// console.log(a>b);
// //kiểm tra xem a='10' không,,so sánh cả kiểu dữ liệu
// console.log(a=='10');
// let x='5',y=6;
// console.log(x!==y);
//CRUD
//create
// let a=1,b=4,c=4,x1,x2,x;
// let delta = (b**2)-(4*a*c);
// if(delta>0){
//      x1=(-b+Math.sqrt(delta))/(2*a);
//      x2=(-b-Math.sqrt(delta))/(2*a);
//      console.log(x1);
//      console.log(x2);
// }
// else if(delta==0){
//     x=(-b/2*a);
//     console.log(x);
// }
// else{
//     console.log('Phương trình vô nghiệm');
// }
// function writeLog(){
//     var myString='';
//     for(var param of arguments){
//         myString = `${param} - `
//     console.log(myString);
//     }
// }
// writeLog('Log1','Log2','Log3',4,5,6);

//Hàm show kết quả
// function show_result(){
//     let input = document.getElementById("message");
//     let div = document.getElementById("result");

//     div.innerHTML = input.value;
// }

//Hàm kêu copy
// function show_message(){
//     alert('copy thành công');
// }

//Hàm Cộng
function show_result(){
    var a = document.getElementById("vara");
    var b = document.getElementById("varb");
    var result = document.getElementById("result");
    var tong = parseInt(a.value) + parseInt(b.value);

    if(!NaN(tong)){
        result.value=tong;
    }
}
