//Khởi tạo vào N là số lượng giá trị
let n = parseInt(prompt("Nhập số lượng số mà bạn muốn nhập:"));

let b = [];
let sosanh=0;
for (let i = 0; i < n; i++) {
    b[i] =parseFloat(prompt("Nhập số thứ "+i+" là: "));
    if(sosanh<b[i]){
        sosanh=b[i];
    } 
}
document.writeln("Số lớn nhất là: "+sosanh);
