// B1: Khổi tạo Biến Math.int
let Math = Number(prompt('Nhập vào điểm môn toán:'));
//B2: Khởi tạo Biến Physics.int
let Physics = Number(prompt('Nhập vào điểm môn hóa học:'));
//B3: Khởi tạo Biến Chemistry.int
let Chemistry = Number(prompt('Nhập vào điểm môn Vật lý:'));
//  B4:Tính điểm trung bình môn
let average = (Math + Physics + Chemistry) / 3;
//B5: In ra điểm trung bình
console.log('Điểm trung bình là: ' + average);