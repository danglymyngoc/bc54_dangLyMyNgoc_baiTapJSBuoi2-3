/*
Mô hình 3 khối:
- input: soThu1, soThu2, soThu3, soThu4, soThu5
- Các bước xử lý:
    B1: tạo 5 biến tương ứng với 5 số
    B2: tạo biến ketQua
    B3: gán giá trị cho biến ketQua = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5)/5
    B4: in ketQua ra màn hình
- output: ketQua

*/

document.getElementById('btnTinhTBC').onclick = function(){
    var soThu1 = Number(document.getElementById('soThu1').value);
    var soThu2 = Number(document.getElementById('soThu2').value);
    var soThu3 = Number(document.getElementById('soThu3').value);
    var soThu4 = Number(document.getElementById('soThu4').value);
    var soThu5 = Number(document.getElementById('soThu5').value);
    var ketQua = '';

    ketQua = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5)/5;
    document.getElementById('ketQuaTBC').innerHTML = 'Trung bình cộng = ' + ketQua;
}