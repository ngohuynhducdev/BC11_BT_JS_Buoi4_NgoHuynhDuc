document.getElementById("btnNgayTruoc").onclick = function (event) {
    event.preventDefault();
    var ngay = document.getElementById("Ngay").value;
    var thang = document.getElementById("Thang").value;
    var nam = document.getElementById("Nam").value;
    if (nam % 4 == 0 && nam % 100 != 0 || nam % 400 == 0) {
        document.getElementById("divNam").innerHTML = "Đây là năm nhuận";
    } else {
        document.getElementById("divNam").innerHTML = "Đây là năm không nhuận";
    };

    var ngay = parseInt(ngay) - 1;
    document.getElementById("divNgay").innerHTML = "Ngày trước là ngày:" + ngay;
    document.getElementById("divThang").innerHTML = "Tháng: " + thang;
};
document.getElementById("btnNgayTiepTheo").onclick = function (event) {
    event.preventDefault();
    var ngay = document.getElementById("Ngay").value;
    var thang = document.getElementById("Thang").value;
    var nam = document.getElementById("Nam").value;
    if (nam % 4 == 0 && nam % 100 != 0 || nam % 400 == 0) {
        document.getElementById("divNam").innerHTML = "Đây là năm nhuận";
    } else {
        document.getElementById("divNam").innerHTML = "Đây là năm không nhuận";
    };

    var ngay = parseInt(ngay) + 1;
    document.getElementById("divNgay").innerHTML = "Ngày tiếp theo là ngày: " + ngay;
    document.getElementById("divThang").innerHTML = "Tháng: " + thang;
};