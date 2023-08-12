/*
Mô hình 3 khối:
- input: iSo
- Các bước xử lý:
    B1: tạo biến iSo, hangChuc, hangDonVi
    B2: tạo biến ketQua
    B3: gán giá trị cho biến hangChuc = Math.floor(iSo / 10)
    B4: gán giá trị cho biến hangDonVi = iSo % 10
    B5: gán giá trị cho biến ketQua = (hangChuc + hangDonVi)
    B6: in ketQua ra màn hình
- output: ketQua

*/

document.getElementById('btnTinhKySo').onclick = function(){
    var iSo = Number(document.getElementById('iSo').value);
    var ketQua = '';

    var hangChuc = Math.floor(iSo / 10);
    var hangDonVi = iSo % 10;


    ketQua = Number(hangChuc + hangDonVi);
    document.getElementById('ketQuaKySo').innerHTML = 'Tổng ký số = ' + ketQua;

}