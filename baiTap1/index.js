/*
Mô hình 3 khối:
- input: soNgayLam
- Các bước xử lý:
    B1: tạo biến soNgayLam
    B2: tạo biến ketQua
    B3: gán giá trị cho biến ketQua = soNgayLam * 100000
    B4: in ketQua ra màn hình
- output: ketQua

*/

document.getElementById('btnTinhLuong').onclick = function(){
    var soNgayLam = Number(document.getElementById('soNgayLam').value);
    var ketQua = '';

    ketQua = soNgayLam * 100000;
    document.getElementById('ketQua').innerHTML = 'Tổng lương: ' + ketQua;
}