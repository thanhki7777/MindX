//Bài 1:
let str = "";
function numberOneTriangle(N){
  var N = parseInt(N);
  //tạo độ cao của tam giác
  for(let i = 0 ;i<N;i++){
    for(let j=0;j<=i;j++){
      document.write("*");
    }
    document.write("<br />")
  }
}

numberOneTriangle(2);
//Bài 2:
var a = prompt("Nhập số a:");
var b = prompt("Nhập số b:");
let array = [];
function searchPrime(a,b){
  for(let i = a;i<=b;i++)
        {
            var dem = 0;
            for(let j = 2;j<=i;j++)
            {
                if(i%j==0)
                {
                   dem+=1;
                }
            }
            if(dem<=1)
            {
            console.log(i);
            }
        }   
}
searchPrime(20,50);
