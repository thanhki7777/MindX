//Bai tap thuc hanh
// Setup
// const contacts = [
//   {
//     firstName: "Van",
//     lastName: "Nguyen",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Pho"],
//   },
//   {
//     firstName: "Son",
//     lastName: "Trinh",
//     number: "0994372684",
//     likes: ["Cheese", "Donut", "Apple"],
//   },
//   {
//     firstName: "Trong",
//     lastName: "Le",
//     number: "0487345643",
//     likes: ["Beer", "King Crab"],
//   },
//   {
//     firstName: "Tong",
//     lastName: "Vo",
//     number: "unknown",
//     likes: ["Tiger", "Sword", "Wine"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   for(let x=0;x<=contacts.length;x++){
//     if(contacts[x].firstName === name){
//       if(prop in contacts[x]){
//         return contacts[x][prop];
//       }
//       else{
//         console.log("Khong co thuoc tinh");
//       }
//     }
//   }
//   console.log("Khong ton tai thong tin");
// }

// console.log(lookUpProfile("Trong", "number"));
//1.Cho đoạn code sau, sau đó biểu diễn các cách để truy cập được các thuộc tính bên trong object đó
// let person = {
//     name:       'Bob',
//     occupation: 'web developer',
//     hobbies:    'painting',
//   };
//Cách 1
  //console.log(person);
//Cách 2  
//   for (var key in person) {
//     console.log(key,":",person[key]);
//   }


//2.Cho object obj, hãy tạo một array chứa key của tất cả các property của obj và đều viết hoa
// - có sử dụng Object.key()
// - có sử dụng các method của array
// - Có sử dụng toUpperCase()
// let obj = {
//     b: 2,
//     a: 1,
//     c: 3,
//   };
//   let keyarray = Object.keys(obj);
//   // console.log(keyarray);
//   toUpper = function(x){ 
//     return x.toUpperCase();
//   };
//   keyarray = keyarray.map(toUpper);
//   console.log(keyarray);

//3.Tạo một object mới có tên family và sử dụng Object myFamily như là prototype của object đó
// let myFamily = {
//   quantity: 4,
//   member: ["Dad", "Mom", "Me", "Daughter"],
// 	location: "Vietnam",
// };
// let family = {
  
// }

//4.Thay đổi giá trị 6 bằng 606 bằng 2 cách
// let obj = {
//   foo: { a: "hello", b: "world" },
//   bar: ["example", "mem", null, { xyz: 6 }, 88],
//   qux: [4, 8, 12]
// };
// obj.bar[3].xyz=606;
// console.log(obj.bar[3].xyz);






//Bài tập thêm 1:
// var user = {
//   name: 'Hieu',
//   age:18,
//   appearance:{
//     haircolor:'black',
//     skincolor:'yellow',
//     height:1700,
//     weight:68
//   }
// }

// function getKeys(object,results = []){
//   let keys = results;
//   for(let key in object){
//       keys.push(key);
//       if(typeof object[key] !== 'object'){
//         getKeys(object[key],keys);
//       }
//   }
//   return keys;
// }
// console.log('keys',getKeys(user));

//Bài tập thêm 2:
 let array = [13,15,17,19];
 
 function insertElement(array,index,element){
   array.splice(index,2,element);
   return array;
 }
 console.log(insertElement(array,1,14));
