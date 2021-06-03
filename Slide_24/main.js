document.getElementById("btnTinhDiemTrungBinh").onclick = function (event) {
    event.preventDefault();
    
    var tenHocSinh = document.getElementById("txtTenHocSinh").value;
    var diemToan = parseInt(document.getElementById("txtDiemToan").value);
    var diemLy = parseInt(document.getElementById("txtDiemLy").value);
    var diemHoa = parseInt(document.getElementById("txtDiemHoa").value);

    
    var dtb = (diemToan + diemLy + diemHoa) / 3;
    var loaiHocLuc = "";
    
    if (dtb >= 8.5) {
        loaiHocLuc = "Giỏi";
    } else if (6.5 <= dtb && dtb < 8.5){
        loaiHocLuc = "Khá";
    } else if (5 <= dtb && dtb <= 6.5) {
        loaiHocLuc = "Trung Bình";
    } else {
        loaiHocLuc = "Yếu";
    }

    var info = "Học sinh: " + tenHocSinh + " - Loại: " + loaiHocLuc;
    
    document.getElementById("footerCard").innerHTML = info;
    document.getElementById("footerCard").classList.add("alert", "alert-success");

    }   

