let time= parseInt(prompt('Nhập vào số giây',''));
let t = Math.floor((time));
let hour = Math.floor((t/3600));
let minute = Math.floor((t%3600)/60);
let second = Math.floor((t%3600)%60);
console.log('time',hour + ':' + minute + ':' + second);


