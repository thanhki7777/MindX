//1.Hàm sau đây trả về true nếu tuổi tham số lớn hơn 18.

// Nếu không, nó sẽ yêu cầu xác nhận và trả về kết quả của nó.

// Viết lại nó, để thực hiện tương tự, nhưng không có if, trong một dòng duy nhất.

// Tạo hai biến thể sau:

// - Sử dụng một toán tử dấu chấm hỏi ?
// - Sử dụng OR ||
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }
//TH1:dung toan tu cham hoi
// function checkAge(age){
//     return age > 18 ? true : `Did parents allow you`;
// }
// console.log(checkAge(12));
//TH2:dung toan tu OR
// let age = parseInt(prompt('Nhập số tuổi của bạn'));
// console.log(age > 18 ||  `Did parents allow you`);

//2.Viết hàm min (a, b) trả về gía trị nhỏ nhất trong hai số a và b.
// function checkMin(a,b){
//     let min=a;
//     if(min>b){
//         min=b;
//     }
//     return min;
// }
// console.log(checkMin(1,2));


//3.Thay thế Biểu thức hàm bằng các hàm mũi tên trong đoạn code dưới đây:
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );



//4.Viết code yêu cầu đăng nhập với `prompt`.

// Nếu khách truy cập nhập “`Admin`“, sau đó nhắc nhập mật khẩu, nếu đầu vào là một dòng trống hoặc Esc – hiển thị “Canceled”, nếu là một chuỗi khác – thì hiển thị “Tôi không biết bạn”.

// Mật khẩu được kiểm tra như sau:

// - Nếu nó bằng “mindX”, thì hãy hiển thị “Chào mừng!”,
// - Một chuỗi khác – hiển thị “Mật khẩu sai”,
// - Đối với một chuỗi trống hoặc đầu vào đã hủy, hãy hiển thị “Đã hủy”
const username = prompt('Tên đăng nhập');
const password = prompt("Mật khẩu");
if(username = 'Admin'){
    if(password == 'mindx'){
        alert('Chào mừng bờ rô');
    }
    else if(password != 'mindx'){
        alert('Mật khẩu sai');
    }
    else if(password == ''){
        alert("Đã hủy");

    }
}
else if(username != 'Admin'){
    if()

}