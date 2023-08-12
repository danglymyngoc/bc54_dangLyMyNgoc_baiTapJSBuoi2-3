/*
Mô hình 3 khối:
- input: tienUSD
- Các bước xử lý:
    B1: tạo biến tienUSD
    B2: tạo biến tienVND
    B3: gán giá trị cho biến tienVND = tienUSD * 23500
    B4: in tienVND ra màn hình
- output: tienVND

*/

document.getElementById('btnQuyDoiTien').onclick = function(){
    var tienUSD = Number(document.getElementById('tienUSD').value);
    var tienVND = '';

    tienVND = tienUSD * 23500;
    document.getElementById('tienVND').value = tienVND + ' VND';
}