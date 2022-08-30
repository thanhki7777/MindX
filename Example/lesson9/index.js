// //khai báo function
// function sayHello(name,age,address){
//     //viết code trong này
//     console.log('Hello World' + name + age + address);
// }
// sayHello('Chinh','NaN','Hai Phong');

// let saySomething = function (){
//     //code here
// }

// //arrow function
// let sayGoodBye = (name, age ,favorites) => console.log('Are you sure to say goodbye');
// sayGoodBye('Chinh','NaN','film');

//function return
// function sub(a,b){
//     //tru a cho b
//     return a-b;
//     console.log('hello');//khong duoc thuc thi
// }
// let x = sub(5,2);
// console.log(x);
// let number1 = 10;
// function test(){
//     number1 = 30;
//     return number1 + 10;
// }
// console.log(number1);
// let result = test();
// // console.log(number1,result);

// let num = [1,2,3,4,5,6]

// console.log(num[6]);
// num[3]=100;
// num[0]=10
// console.log(num);

// num.push(80);//them 80 vao cuoi mang
// num.push(90,100,110);
// num.unshift(120,130);//them phan tu vao dau mang
// num.pop();//xoa phan tu cuoi mang
// num.shift();//xoa phan tu dau mang
// num.splice(2,2);//xoa phan tu giua mang

// let date = prompt('Nhập ngày');
// let month = prompt('Nhập tháng');
// let year = prompt('Nhập năm');

// function namNhuan(year){
//     return ((year%4==0&&year%100!=0 || year%400==0));
// }
// function numberofDateinMonth(month,year){
//     switch(month){
//         case 1:case 3:case 5:case 7:case 8:case 10:case 12:
//             return 31;
//             break;
//          case 2:
//             if(namNhuan(year)){
//                 return 29;
//             }   
//             return 28;
//         case 4:case 6:case 9:case 11:
//             return 30;
//             break;    
//     }
// }
// function nextDate(date,month,year){
//     nd=date,nm=month,ny=year;
//    if(year > 0 && month > 0 && month < 13 && date > 0 && date < numberofDateinMonth(month,year)){
//      nd+=1;
//      //neu thang nhap khong phai thang 12 thi tang thang len 1 va ngay se = 1
//      if(month!=12&&date==numberofDateinMonth(month,year)){
//         nd=1;
//         nm+=1;
//     }
//      //neu thang nhap la thang 12 va so ngay = so ngay trong thang thi tang nam len 1 va ngay va thang deu =1
//     else if(month==12&&date==numberofDateinMonth(month,year)){
//         nd=1;
//         nm=1;
//         ny+=1;
//     }
//     else if(month==2){
//         if(namNhuan(year)){
//             if(date==29){
//                 nd=1;
//                 nm+=1;
//             }
//         }
//         else{
//             if(date==28){
//                 nd=1;
//                 nm+=1;
//             }
//         }
//      }
//    }
//    alert(`Ngày tháng năm tiếp theo là ${nextDate(nd,nm,ny)}`);
// }
function Add (a, b) // a, b là các tham số
 
{
 
  return a+b;
 
}
 
var ob = Add.call (ob, 3, 4);
 
console.log(ob);


