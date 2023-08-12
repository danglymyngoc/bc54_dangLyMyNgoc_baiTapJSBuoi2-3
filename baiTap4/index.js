/*
Mô hình 3 khối:
- input: chieuDai, chieuRong
- Các bước xử lý:
    B1: tạo biến chieuDai, chieuRong
    B2: tạo biến chuVi, dienTich
    B3: gán giá trị cho biến chuVi = (chieuDai + chieuRong) * 2
    B4: gán giá trị cho biến dienTich = chieuDai * chieuRong
    B5: in chuVi và dienTich ra màn hình
- output: chuVi, dienTich

*/

document.getElementById('btnTinh').onclick = function(){
    var chieuDai = Number(document.getElementById('chieuDai').value);
    var chieuRong = Number(document.getElementById('chieuRong').value);
    var chuVi = '';
    var dienTich = '';

    chuVi = (chieuDai + chieuRong) * 2;
    dienTich = chieuDai * chieuRong;

    document.getElementById('ketQuaTinh').innerHTML = 'Chu vi = ' + chuVi + ' -' + ' Diện tích = ' + dienTich;
}