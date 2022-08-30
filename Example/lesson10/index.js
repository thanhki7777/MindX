// let student = {
//     firstname:'John',
//     age:18,
//     bag: {
//         book: ['a','b','c'],
//         price: 50,
//     }
// };
// // for(let key in student){
// //     console.log(`${key}: ${student[key]}`);
// // }
// let List=Object.keys(student);
// console.log(valueList);

const obJect = {
    1:{
        albumTitle:'Hahaha',
        artist:'SonTung',
        track:['Chay Ngay di','AmTham','KPDVD']
    },
    2:{
        albumTitle:'Huhuhu',
        artist:'CharliePuth',
        track:['Chay Ngay','AmTh','KPD']
    },
    3:{
        albumTitle:'Hahaha',
        artist:'SonTung',
        track:['Chnvowvn','Avjiwv','Kjvbwijvbw']
    },
}
//Create
// obJect[prompt('Nhập thông tin nghệ sỹ')]={
//      albumTitle : prompt('Nhập title album'),
//      artist : prompt('Nhập thông tin tác giả'),
//      track:[prompt('Nhập thông tin track')]
// }
//Read
let read = prompt('Do you want to read object?');
if(read == 'yes'){
    let ques = prompt('What ID do you want to read?');
    let id = Object.keys(obJect);
      for(let i in id){
        if(ques == id[i]){
            let ques1_2 = prompt('Take all of list?');
            if(ques1_2 == 'yes'){
                console.log(obJect);
            }
        }
      }
}
//Delete
delete obJect.prompt("Nhập id bạn muốn xóa");


